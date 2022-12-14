// // const express = require('express')
// // const app = express()
// // // const con = require('./dbconnection');

// // const RouterController = require('./controllers/router.controller');



// // app.use(express.json())



// // app.use(express.json());
// // app.use(express.urlencoded({extended: true}));

// // app.use('/router', RouterController);






//  app.post('/userlogin/old', async (req, res) => {
//   const {fname, midname, lname, emai, phone, loginid, location, role, temppass, status} = req.body;
  
// if (!loginid || !location) {
//   res.sendStatus(400)
//   return
// }
// res.send({ loginid:loginid})
// })



// app.post('/userlogin/new', async (req, res) => {
//   const {fname, midname, lname, emai, phone, loginid, location, password,role, temppass, status} = req.body;
// if (!loginid || !password || !location) {
//   res.sendStatus(400)
//   return
// }

// res.send({ loginid:loginid})
// })





//  app.post('/newuseradd', async (req, res) => {
//   const {fname, midname, lname, emai, phone, loginid, location, role, temppass, status} = req.body;
// if (!fname || !temppass) {
//   res.sendStatus(400)
//   return
// }
// res.send({ fname:fname})
// })




// app.post('/userlogin', async (req, res) => {
//   const {fname, midname, lname, emai, phone, loginid,Status, location, role, temppass, status} = req.body;
// if (!Status || !loginid) {
//   res.sendStatus(400)
//   return
// }
// res.send({ loginid:loginid})
// })


// app.post('/resetpassword/', async (req, res) => {
//   const {fname, midname, lname, emai, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,Status, location, role, temppass, status} = req.body;
// if (!answer1 || !answer2 || !answer3) {
//   res.sendStatus(400)
//   return
// }
// res.send({ loginid:loginid})
// })


// app.post('/userstatus', async (req, res) => {
//   const {fname, midname, lname, emai, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,log,Status, location, role, temppass, status} = req.body;
// if (!Status || !log) {
//   res.sendStatus(400)
//   return
// }
// res.send({ log:log})
// })



// app.post('/appointments/:id', async (req, res) => {
//   const {fname, midname, lname, emai, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,log,Status, currentDate,location, role, temppass, status} = req.body;
// if (!currentDate) {
//   res.sendStatus(400)
//   return
// }
// res.send({ currentDate:currentDate})
// })



// app.post('/check', async (req, res) => {
//   const {fname, midname, lname, emai,email, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,log,Status, location, role, temppass, status} = req.body;
// if (!email || !Status)  {
//   res.sendStatus(400)
//   return
// }
// res.send({ email:email})
// })



// app.post('/displayuserlist', async (req, res) => {
//   const {fname, midname, lname, emai,email,FirstName,LoginID,Role,Email,Location, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,log,Status, location, role, temppass, status} = req.body;
// if (!FirstName || !LoginID ||  !Email || !Role ||!Location || !Status)  {
//   res.sendStatus(400)
//   return
// }
// res.send({ Email:Email})
// })



// app.post('/updateolduser', async (req, res) => {
//   const {fname, midname, lname, emai,email,FirstName,LoginID,Role,Email,Location, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,log,Status, location, role, temppass, status} = req.body;
// if (!fname || !loginid ||  !emai || !Role ||!Location || !Status)  {
//   res.sendStatus(400)
//   return
// }
// res.send({ emai:emai})
// })


// // app.post('/insuranceInformation/insuranceinfo', async (req, res) => {
// //   const {fname, midname,primaryInsurance,healthPlan,groupId,memberId, lname, emai,email,uid,FirstName,LoginID,Role,Email,Location, phone,hash,question1,question2,question3, answer1,answer2,answer3,loginid,log,Status, location, role, temppass, status} = req.body;
// // if ( !primaryInsurance ||  !healthPlan || memberId || groupId)  {
// //   res.sendStatus(400)
// //   return
// // }
// // res.send({ memberId:memberId})
// // })









// module.exports = app;