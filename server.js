const express = require("express");
const app = express();
// const con = require('./dbconnection');
const { resolve } = require("path");

const env = require("dotenv").config({ path: "./.env" });
const cors = require("cors");
const http = require("http");
const RouterController = require("./controllers/router.controller");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// const multer = require("multer");
// const path = require('path');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/payment-element",
    version: "0.0.2",
    url: "https://github.com/stripe-samples",
  },
});

// app.use(function (req, res, next) {
//   // Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin','*');
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);

//   next()
// }
//
app.set("trust proxy", 1);

//Frontend-new-url :  'https://devopsfrontend.azurewebsites.net'

app.use(express.json());
app.use(
  cors({
    origin: ["https://ezppay-cirruslabs.azurewebsites.net"],
    //origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: "subscribe",
    key: "userId",
    resave: false,
    saveUninitialized: true,
    resave: false,
    cookie: {
      httpOnly: true,
      //  secure: false,
      secure: true,
      maxAge: 1000 * 60 * 60,
      sameSite: "none",
    },
  })
);

// // CORS HEADERS MIDDLEWARE
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id, Blob"
//   );

//   res.contentType("application/json");
//   req.header("Content-Type", "application/json");

//   next();
// });

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** ------- SOCKET INITIALIZATION --- */
const server = http.createServer(app);
//const io = require('socket.io')(server);

app.use("/router", RouterController);

const db = require("./models");
db.sequelize.sync().then((req) => {
  var port = normalizePort(process.env.PORT || "4002");
  app.set("port", port);
  /** START THE SERVER */
  server.listen(port, (req, res) => {
    console.log("Server is running on port : " + port);
  });
});

//paymnet things

app.use(express.static(process.env.STATIC_DIR));

app.use(
  express.json({
    // We need the raw body to verify webhook signatures.

    // Let's compute it only when hitting the Stripe webhook endpoint.

    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");

  res.sendFile(path);
});

app.get("/config", (req, res) => {
  console.log;

  //   res.send({

  //     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,

  //   });
});

app.get("/create-payment-intent", async (req, res) => {
  res.send({ clientSecret: "clientsecrettest" });
  return;
  // Create a PaymentIntent with the amount, currency, and a payment method type.

  //

  // See the documentation [0] for the full list of supported parameters.

  //

  // [0] https://stripe.com/docs/api/payment_intents/create

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",

      amount: 1999,

      //   automatic_payment_methods: { enabled: true }
    });

    // console.log(paymentIntent.client_secret)

    // Send publishable key and PaymentIntent details to client

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: "Stripe Connection Error",
      },
    });
  }
});

// Expose a endpoint as a webhook handler for asynchronous events.

// Configure your webhook in the stripe developer dashboard

// https://dashboard.stripe.com/test/webhooks

app.post("/webhook", async (req, res) => {
  let data, eventType;
  // Check if webhook signing is configured.

  if (process.env.STRIPE_WEBHOOK_SECRET) {
    // Retrieve the event by verifying the signature using the raw body and secret.

    let event;

    let signature = req.headers["stripe-signature"];

    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,

        signature,

        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);

      return res.sendStatus(400);
    }

    data = event.data;

    eventType = event.type;
  } else {
    // Webhook signing is recommended, but if the secret is not configured in `config.js`,

    // we can retrieve the event data directly from the request body.

    data = req.body.data;

    eventType = req.body.type;
  }

  if (eventType === "payment_intent.succeeded") {
    // Funds have been captured

    // Fulfill any orders, e-mail receipts, etc

    // To cancel the payment after capture you will need to issue a Refund (https://stripe.com/docs/api/refunds)

    console.log("💰 Payment captured!");
  } else if (eventType === "payment_intent.payment_failed") {
    console.log("❌ Payment failed.");
  }

  res.sendStatus(200);
});

// Payment thing upto here

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

exports = module.exports = app;
