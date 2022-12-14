const router = require("express").Router();
const { json } = require("body-parser");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

const multer = require("multer");
var Jimp = require("jimp");
var nodemailer = require("nodemailer");
const newuserAdd = require("../services/addnewUser");
const userList = require("../services/displayUserlist");
const userUpdate = require("../services/updateOldUser");
const userLoginid = require("../services/userLoginforrec");
//const { assign } = require('nodemailer/lib/shared');
const bcrypt = require("bcrypt");
const saltRounds = 10;
// const express=require('express');

const cookieParser = require("cookie-parser");
const session = require("express-session");

//  app.options('*', cors()) // include before other routes

const userLogin = require("../services/loginServices");
const newUserLogin = require("../services/newuserlogin");
const oldUserLogin = require("../services/olduserlogin");
const appointmentService = require("../services/appointmentServices");
const resetpasswordService = require("../services/passwordResetServices");
const userNameRecovery = require("../services/usernameRecovery");
const userstatusUpdate = require("../services/updateuserStatus");
const patientidentification = require("../services/patientidentification");
const patientSearch = require("../services/searchpatients");
const patientinfo = require("../services/patientinfoServices");

// const patientinsert=require("../services/patientinsert");
const contactinfo = require("../services/contactinfoServices");
const vieweligibility = require("../services/viewEligibilityServices");

// const {patient}=require("../models")
// const {patientadditionalinfo}=require("../models");
// const {patientguarantor}=require("../models")
// const {patient_appointment}=require("../models");
// patient.hasOne(patientadditionalinfo);
// patient.hasOne(patientguarantor)
// patient.hasOne(patient_appointment)

const updatecontact = require("../services/updatecontact");
const updateidentification = require("../services/updateidentification");
const viewestimate=require("../services/viewestimate")

router.use(express.json());
// -- MIDDLEWARE ---

router.use(bodyParser.urlencoded({ extended: true }));

const InsuranceInfo = require("../services/insuranceinformation");

const models = require("../models");
const User = models.User;
const Company = models.Company;
const WorkingDay = models.WorkingDay;
const Patient_login = models.patient_login;
const user = models.user_login;
const Patient_additional = models.patient_additionalinfo;
const Patient_providers = models.provider_details;
const patient_appointmen=models.patient_appointment;
const Patientaddress=models.patientaddress;
const Servicelocation=models.servicelocation
const Patientestimate=models.patientestimate;
const Patientestimatebenefit=models.patientestimatebenefit;
const Patient_insurance=models.patient_insurance;
router.get("/sele", async (req, res) => {
  Patient_insurance.create({
    // FirstName: "riya",
    // LastName: "roy",
    // Location: "Radiology",
    // email: "riya@gmail.com",
    // startTime:"2012-12-12"
    primaryInsurance:"UNITED HEALTHCARE OF RIVER VALLEY"
  })
    .then((newCompany) => {
      // The get() function allows you to recover only the DataValues of the object
      console.log(newCompany.get());
    })
    .catch((err) => {
      console.log("Error while company creation : ", err);
    });
});

const { profile } = require("console");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const { response } = require("express");
const patient_appointment = require("../models/patient_appointment");

const upload = multer({ storage: fileStorageEngine });

router.post("/multiple", upload.array("images", 3), (req, res) => {
  res.send("Multiple Files Uploaded successfully");

  const reqPath = path.join(__dirname, "../"); // console.log(reqPath)
  for (let i = 0; i < req.files.length; i++) {
    Jimp.read(`${reqPath}/uploads/${req.files[i].filename}`, (err, profile) => {
      if (err) throw err;
      profile // return image
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality //   .greyscale() // set greyscale
        .write(`${reqPath}/modified/${req.files[i].filename}`); // save //   console.log(profile)
    });
  }
});

router.post("/userlogin", async (req, res) => {
  try {
    const result = await userLogin.userLogin1(req.body);

    const loginId = req.body.loginid;
    if (result.toString() == "") {
      res.send({ message: "User doesnt exist" });
    } else if (result[0].dataValues.Status === "Active") {
      if (
        result[0].dataValues.Password != null &&
        result[0].dataValues.Password != ""
      ) {
        res.send({ message: "Old" });
      } else if (
        result[0].dataValues.Password == "" ||
        result[0].dataValues.Password == null
      ) {
        res.send({ message: "New" });
      }
    } else if (result[0].dataValues.Status == "Suspended") {
      res.send({ message: "Account is disabled, contact admin." });
    }
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/userlogin/old1", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

router.post("/userlogin/old2", async (req, res) => {
  try {
    password = req.body.password;
    const result = await oldUserLogin.oldUserLogin1(req.body);

    if (result.length > 0) {
      bcrypt.compare(password, result[0].Password, (error, response) => {
        if (response) {
          req.session.user = result;
          console.log(req.session.user);
          res.send(result);
        } else {
          res.send({ message: "Wrong password combination" });
        }
      });
    }
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/logout1", (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("userId", { path: "/" });
    res.send({ data: "loggedout" });
  });
});

router.post("/userlogin/new", async (req, res) => {
  try {
    const result = await newUserLogin.newUserLogin1(req.body);
    if (result.length > 0) {
      req.session.usernew = result;
      console.log(req.session.usernew);
      res.send(result);
    } else {
      res.send({ message: "No user found" });
    }
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/newuseradd", async (req, res) => {
  try {
    // const result = database.createUser(FirstName, Middlename,LastName,Email,PhoneNo,LoginID,location,Role,TempPass,Status)
    const result = await newuserAdd.addnewuser(req.body);
    res.set("Content-Type", "application/json");
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/adminappointments/:id", async (req, res) => {
  try {
    const result = await appointmentService.adminappointments(
      req,
      res,
      req.params.id
    );
    // console.log(result)
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/appointments/:id/:location", async (req, res) => {
  try {
    console.log(req.params);
    const result = await appointmentService.appointments(
      req,
      res,
      req.params.id,
      req.params.location
    );
    console.log(result);
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/resetpassword", async (req, res) => {
  try {
    const result = await resetpasswordService.resetpassword(req.body);
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/check", async (req, res) => {
  try {
    const email = req.body.email;
    console.log(email);
    const result = await userNameRecovery.userrecovery(req.body);
    console.log(result);
    res.send(result);
    const login = result[0].dataValues.LoginId;
    console.log(login);
    console.log(email);
    if (login) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        auth: {
          user: "cl.automailing@gmail.com",
          pass: "wimbgzzglzzxfqpz",
        },
      });
      var mailOptions = {
        from: "cl.automailing@gmail.com",
        to: email,
        subject: "USERNAME RECOVERY",
        html: `<h1>YOUR LOGINID:${login}</h1>`,
      };

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
        }
      });
    }
    // res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/userstatus", async (req, res) => {
  try {
    const result = await userstatusUpdate.userstatusupdate(req.body);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/displayuserlist", async (req, res) => {
  try {
    const result = await userList.displayuserlist();
    res.json(result);
    // console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/updateolduser", async (req, res) => {
  try {
    const result = await userUpdate.updateolduser(req.body);
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get('/passwordrecoverynew/:LoginID', async (req, res) => {
  try {

    const  LoginID = req.params.LoginID ;

    const result = await userLoginid.userloginid(req ,res , LoginID);
    res.json(result);

    console.log(result);
    
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/insuranceInformation/insuranceinfo", async (req, res) => {
  try {
    // console.log(req.body);
    const result = await InsuranceInfo.insuranceinfo(req.body);
    res.json(result);
    //   console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/insuranceInfoUpdate", async (req, res) => {
  try {
    // console.log(req.body);
    const result = await InsuranceInfo.insuranceinfoupdate(req.body);
    res.json(result);
    //   console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/multi", upload.array("images", 2), (req, res) => {
  // console.log(req.files);
  // const path=req.files[1].path;
  // console.log(path);
  res.send("single file uploaded successfully");

  const reqPath = path.join(__dirname, "../"); // console.log(reqPath)

  for (let i = 0; i < req.files.length; i++) {
    Jimp.read(`${reqPath}/uploads/${req.files[i].filename}`, (err, profile) => {
      if (err) throw err;

      profile // return image

        .resize(256, 256) // resize

        .quality(60) // set JPEG quality //   .greyscale() // set greyscale

        .write(`${reqPath}/modified/${req.files[i].filename}`);
    });
  }
  // console.log(req.files[1].filename);
});

router.post("/contactinfo/patientlogin", async (req, res) => {
  try {
    // console.log(req)
    const result = await contactinfo.patientlogin(req.body);
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/patient", async (req, res) => {
  try {
    console.log(req.body);

    const result = await patientidentification.patientidentification(req.body);
    console.log(result);
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.post("/single", upload.array("image", 3), (req, res) => {
  res.send("single file uploaded successfully");

  const reqPath = path.join(__dirname, "../"); // console.log(reqPath)
  for (let i = 0; i < req.files.length; i++) {
    Jimp.read(`${reqPath}/uploads/${req.files[i].filename}`, (err, profile) => {
      if (err) throw err;
      profile // return image
        .resize(256, 256) // resize
        .quality(60) // set JPEG quality //   .greyscale() // set greyscale
        .write(`${reqPath}/modified/${req.files[i].filename}`);
    });
  }
});

router.get("/searchpatient", async (req, res) => {
  try {
    console.log(req.body);

    const result = await patientSearch.searchpatient();
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/patientinfo/:id", async (req, res) => {
  try {
    const result = await patientinfo.patientinfo(req, res, req.params.id);
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "Something went wrong please try again",
      err: err,
    });
  }
});

router.get("/vieweligibility/:id", async (req, res) => {
  try {
    const email = req.params.id;
    const result = await vieweligibility.viewEligibility(req, res, email);
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "Something went wrong please try again",
      err: err,
    });
  }
});

//STRIPE PAYMENTS RELATED

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/payment-element",
    version: "0.0.2",
    url: "https://github.com/stripe-samples",
  },
});

// router.use(express.static(process.env.STATIC_DIR));

// router.get('/', (req, res) => {

//   const path = resolve(process.env.STATIC_DIR + '/index.html');

//   res.sendFile(path);

// });

// router.get('/config', (req, res) => {

//     console.log

// //   res.send({

// //     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,

// //   });

// });

// router.get('/create-payment-intent', async (req, res) => {

//     // Create a PaymentIntent with the amount, currency, and a payment method type.

//     //

//     // See the documentation [0] for the full list of supported parameters.

router.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

router.get("/testroute", async (req, res) => {
  res.send({ msg: "THIS ROUTE FINALLY WORKS ON ITS OWN" });
});

router.get("/create-payment-intent", async (req, res) => {
  // https://stripe.com/docs/api/payment_intents/create
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
        message: e.message,
      },
    });
  }
});
// Expose a endpoint as a webhook handler for asynchronous events.
// Configure your webhook in the stripe developer dashboard
// https://dashboard.stripe.com/test/webhooks
router.post("/webhook", async (req, res) => {
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

router.post("/updatecontact", async (req, res) => {
  try {
    const result = await updatecontact.updatecontact(req.body);
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/vieweligibility/:id", async (req, res) => {
  try {
    const email = req.params.id;
    const result = await vieweligibility.viewEligibility(req, res, email);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.status(406).send({
      msg: "Something went wrong please try again",
      err: err,
    });
  }
});

router.post("/updateidentification", async (req, res) => {
  try {
    const result = await updateidentification.updateidentification(req.body);
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
});

router.get("/viewestimate",async(req,res)=>{
  try {
    const result = await viewestimate.viewestimate();
    res.json(result);
    console.log(result);
  } catch (err) {
    res.status(406).send({
      msg: "something went wrong please try again",
      err: err,
    });
  }
})

module.exports = router;
