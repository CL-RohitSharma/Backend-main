// // const request = require('supertest')
// // const app = require('./app')
// // const con = require('./dbconnection');

// // describe("POST /userlogin/old", () => {
// //   describe("when the user has loginid and location", () => {
// //     test("should respond with a 200 status code by saying that the user has loginid and location", async () => {
// //       const response = await request(app).post("/userlogin/old").send({
// //         loginid: "loginid",
// //         location: "location"
// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/userlogin/old").send({
// //         loginid: "loginid",
// //         location: "location"
// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("should get the response of LoginId", async () => {
// //       const response = await request(app).post("/userlogin/old").send({
// //         loginid: "loginid",
// //         location: "location"
// //       })
// //       expect(response.body.loginid).toBeDefined()

// //     })
// //   })
// //   describe("when the loginid and location is missing", () => {
// //     test("should respond with a status code of 400 saying that the loginid and location is missing", async () => {
// //       const bodyData = [
// //         {loginid: "loginid"},
// //         {location: "location"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/userlogin/old").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// <<<<<<< HEAD
// // describe("POST /userlogin/new", () => {
// //   describe("If a user has a loginid, location and password", () => {
// //     test("should respond with a 200 status code saying that the user has loginid, location and password", async () => {
// //       const response = await request(app).post("/userlogin/new").send({
// //         loginid: "loginid",
// //         password: "password",
// //         location:"Location"
// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/userlogin/new").send({
// //         loginid: "loginid",
// //         password: "password",
// //         location:"Location"
// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("text/plain"))
// //     })
// //     test("response has LoginId", async () => {
// //       const response = await request(app).post("/userlogin/new").send({
// //         loginid: "loginid",
// //         password: "password",
// //         location:"Location"
// //       })
// //       expect(response.body.loginid).toBeDefined()
// //     })
// //   })
// //   describe("when the loginid,location  and password is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {loginid: "loginid"},
// //         {password: "password"},
// //         {  location:"Location"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/userlogin/new").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })
// =======
// describe("POST /userlogin/old", () => {
//   describe("given a loginid and location", () => {
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).post("/userlogin/old").send({
//         loginid: "loginid",
//         location: "location"
//       })
//       expect(response.statusCode).toBe(200)
//     })
//     test("should specify json in the content type header", async () => {
//       const response = await request(app).post("/userlogin/old").send({
//         loginid: "loginid",
//         location: "location"
//       })
//       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//     })
//     test("response has LoginId", async () => {
//       const response = await request(app).post("/userlogin/old").send({
//         loginid: "loginid",
//         location: "location"
//       })
//       expect(response.body.loginid).toBeDefined()
//     })
//   })
//   describe("when the loginid and location is missing", () => {
//     test("should respond with a status code of 400", async () => {
//       const bodyData = [
//         {loginid: "loginid"},
//         {location: "location"},
//         {}
//       ]
//       for (const body of bodyData) {
//         const response = await request(app).post("/userlogin/old").send(body)
//         expect(response.statusCode).toBe(400)
//       }
//     })
//   })
// })

// describe("POST /userlogin/new", () => {
//   describe("given a loginid and password", () => {
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).post("/userlogin/new").send({
//         loginid: "loginid",
//         password: "password"
//       })
//       expect(response.statusCode).toBe(200)
//     })
//     // test("should specify json in the content type header", async () => {
//     //   const response = await request(app).post("/userlogin/new").send({
//     //     loginid: "loginid",
//     //     password: "password"
//     //   })
//     //   expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//     // })
//     test("response has LoginId", async () => {
//       const response = await request(app).post("/userlogin/new").send({
//         loginid: "loginid",
//         password: "password"
//       })
//       expect(response.body.loginid).toBeDefined()
//     })
//   })
//   describe("when the loginid and password is missing", () => {
//     test("should respond with a status code of 400", async () => {
//       const bodyData = [
//         {loginid: "loginid"},
//         {password: "password"},
//         {}
//       ]
//       for (const body of bodyData) {
//         const response = await request(app).post("/userlogin/new").send(body)
//         expect(response.statusCode).toBe(400)
//       }
//     })
//   })
// })
// >>>>>>> e0f0cd3fdee907600ee2af4996dbef42193145f3

// <<<<<<< HEAD
// // describe("POST /newuseradd", () => {
// //   describe("when the user has firstname and temppassword", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/newuseradd").send({
// //         fname: "firstname",
// //         temppass: "temppassword"
// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/newuseradd").send({
// //         fname: "firstname",
// //         temppass: "temppassword"
// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has firstname", async () => {
// //       const response = await request(app).post("/newuseradd").send({
// //         fname: "firstname",
// //         temppass: "temppassword"
// //       })
// //       expect(response.body.fname).toBeDefined()
// //     })
// //   })
// //   describe("when the firstname and temppassword is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {fname: "firstname"},
// //         {temppass: "temppassword"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/newuseradd").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })
// =======
// describe("POST /newuseradd", () => {
//   // describe("given a firstname and temppassword", () => {
//   //   test("should respond with a 200 status code", async () => {
//   //     const response = await request(app).post("/newuseradd").send({
//   //       fname: "firstname",
//   //       temppass: "temppassword"
//   //     })
//   //     expect(response.statusCode).toBe(200)
//   //   })
//     // test("should specify json in the content type header", async () => {
//     //   const response = await request(app).post("/newuseradd").send({
//     //     fname: "firstname",
//     //     temppass: "temppassword"
//     //   })
//     //   expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
//     // })
//     test("response has firstname", async () => {
//       const response = await request(app).post("/newuseradd").send({
//         fname: "firstname",
//         temppass: "temppassword"
//       })
//       expect(response.body.fname).toBeDefined()
//     })
//   })
//   describe("when the firstname and temppassword is missing", () => {
//     test("should respond with a status code of 400", async () => {
//       const bodyData = [
//         {fname: "firstname"},
//         {temppass: "temppassword"},
//         {}
//       ]
//       for (const body of bodyData) {
//         const response = await request(app).post("/newuseradd").send(body)
//         expect(response.statusCode).toBe(400)
//       }
//     })
//   })

// >>>>>>> e0f0cd3fdee907600ee2af4996dbef42193145f3

// // describe("POST /userlogin", () => {
// //   describe("given a loginid and Status", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/userlogin").send({
// //         loginid: "loginid",
// //         Status: "Status"
// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/userlogin").send({
// //         loginid: "loginid",
// //         Status: "Status"
// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has loginid", async () => {
// //       const response = await request(app).post("/userlogin").send({
// //         loginid: "loginid",
// //         Status: "Status"
// //       })
// //       expect(response.body.loginid).toBeDefined()
// //     })
// //   })
// //   describe("when the loginid and Status is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {loginid: "loginid"},
// //         {Status: "Status"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/userlogin").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // describe("POST /resetpassword/", () => {
// //   describe("given security questions", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/resetpassword/").send({
// //         answer1: "SecAns1",
// //         answer2: "SecAns2",
// //         answer3: "SecAns3"
// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/resetpassword/").send({
// //         answer1: "SecAns1",
// //         answer2: "SecAns2",
// //         answer3: "SecAns3"
// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     // test("response has security questions", async () => {
// //     //   const response = await request(app).post("/resetpassword/").send({
// //     //     question1: "SecAns1",
// //     //     question2: "SecAns2",
// //     //     question3: "SecAns3"
// //     //   })
// //     //   expect(response.body.question1).toBeDefined()
// //     //   expect(response.body.question2).toBeDefined()
// //     //   expect(response.body.question3).toBeDefined()
// //     // })
// //   })
// //   describe("when the security answers are incorrect", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {answer1: "SecAns1"},
// //         {answer2: "SecAns2"},
// //         {answer3: "SecAns3"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/resetpassword/").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // describe("POST /userstatus", () => {
// //   describe("given a loginid and Status", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/userstatus").send({
// //         log: "loginid",
// //         Status: "Status"
// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/userstatus").send({
// //         log: "loginid",
// //         Status: "Status"
// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has loginid", async () => {
// //       const response = await request(app).post("/userstatus").send({
// //         log: "loginid",
// //         Status: "Status"
// //       })
// //       expect(response.body.log).toBeDefined()
// //     })
// //   })
// //   describe("when the loginid and Status is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {log: "loginid"},
// //         {Status: "Status"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/userstatus").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // describe("POST /appointments/:id", () => {
// //   describe("given a currentdate", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/appointments/:id").send({
// //         currentDate: "currentDate",

// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/appointments/:id").send({
// //         currentDate: "currentDate",

// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has currentdate", async () => {
// //       const response = await request(app).post("/appointments/:id").send({
// //         currentDate: "currentDate",

// //       })
// //       expect(response.body.currentDate).toBeDefined()
// //     })
// //   })
// //   describe("when the currentDate is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {currentDate: "currentDate"},

// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/userstatus").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // describe("POST /check", () => {
// //   describe("given an email", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/check").send({
// //         email: "email",
// //         Status: "Status",

// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/check").send({
// //         email: "email",
// //         Status: "Status",

// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has loginid", async () => {
// //       const response = await request(app).post("/check").send({
// //         email: "email",
// //         Status: "Status",

// //       })
// //       expect(response.body.email).toBeDefined()
// //     })
// //   })
// //   describe("when the email is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {email: "email"},
// //         {Status: "Status"},
// //         {}
// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/check").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // describe("POST /displayuserlist", () => {
// //   describe("given firstname,role,location,status,loginid and email", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/displayuserlist").send({
// //         FirstName: "FirstName",
// //         LoginID: "LoginID",
// //         Role: "Role",
// //         Email: "Email",
// //         Status: "Status",
// //         Location: "Location"

// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/displayuserlist").send({
// //         FirstName: "FirstName",
// //         LoginID: "LoginID",
// //         Role: "Role",
// //         Email: "Email",
// //         Status: "Status",
// //         Location: "Location"

// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has loginid", async () => {
// //       const response = await request(app).post("/displayuserlist").send({
// //         FirstName: "FirstName",
// //         LoginID: "LoginID",
// //         Role: "Role",
// //         Email: "Email",
// //         Status: "Status",
// //         Location: "Location"

// //       })
// //       expect(response.body.Email).toBeDefined()
// //     })
// //   })
// //   describe("when the email is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {FirstName: "FirstName"},
// //         {LoginID: "LoginID"},
// //         {Role: "Role"},
// //         {Email: "Email"},
// //         {Status: "Status"},
// //         {Location: "Location"},
// //         {}

// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/displayuserlist").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // describe("POST /updateolduser", () => {
// //   describe("given firstname,role,location,status,loginid and email", () => {
// //     test("should respond with a 200 status code", async () => {
// //       const response = await request(app).post("/updateolduser").send({
// //         fname: "FirstName",
// //         loginid: "LoginID",
// //         Role: "Role",
// //         emai: "Email",
// //         Status: "Status",
// //         Location: "Location"

// //       })
// //       expect(response.statusCode).toBe(200)
// //     })
// //     test("should specify json in the content type header", async () => {
// //       const response = await request(app).post("/updateolduser").send({
// //         fname: "FirstName",
// //         loginid: "LoginID",
// //         Role: "Role",
// //         emai: "Email",
// //         Status: "Status",
// //         Location: "Location"

// //       })
// //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// //     })
// //     test("response has loginid", async () => {
// //       const response = await request(app).post("/updateolduser").send({
// //         fname: "FirstName",
// //         loginid: "LoginID",
// //         Role: "Role",
// //         emai: "Email",
// //         Status: "Status",
// //         Location: "Location"

// //       })
// //       expect(response.body.emai).toBeDefined()
// //     })
// //   })
// //   describe("when the email is missing", () => {
// //     test("should respond with a status code of 400", async () => {
// //       const bodyData = [
// //         {fname: "FirstName"},
// //         {loginid: "LoginID"},
// //         {Role: "Role"},
// //         {emai: "Email"},
// //         {Status: "Status"},
// //         {Location: "Location"},
// //         {}

// //       ]
// //       for (const body of bodyData) {
// //         const response = await request(app).post("/updateolduser").send(body)
// //         expect(response.statusCode).toBe(400)
// //       }
// //     })
// //   })
// // })

// // // describe("POST /insuranceInformation/insuranceinfo", () => {
// // //   describe("given loginid and status ", () => {
// // //     test("should respond with a 200 status code", async () => {
// // //       const response = await request(app).post("/updateolduser").send({

// // //         primaryInsurance: "primaryInsurance",
// // //         healthPlan: "healthPlan",
// // //         groupId: "groupId",
// // //         memberId: " memberId"

// // //       })
// // //       expect(response.statusCode).toBe(200)
// // //     })
// // //     test("should specify json in the content type header", async () => {
// // //       const response = await request(app).post("/updateolduser").send({

// // //         primaryInsurance: "primaryInsurance",
// // //         healthPlan: "healthPlan",
// // //         groupId: "groupId",
// // //         memberId: " memberId"

// // //       })
// // //       expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
// // //     })
// // //     test("response has loginid", async () => {
// // //       const response = await request(app).post("/updateolduser").send({

// // //     primaryInsurance: "primaryInsurance",
// // //         healthPlan: "healthPlan",
// // //         groupId: "groupId",
// // //         memberId: " memberId"

// // //       })
// // //       expect(response.body.memberId).toBeDefined()
// // //     })
// // //   })
// // //   describe("when the email is missing", () => {
// // //     test("should respond with a status code of 400", async () => {
// // //       const bodyData = [

// // //          {primaryInsurance: "primaryInsurance"},
// // //        { healthPlan: "healthPlan"},
// // //         {groupId: "groupId"},
// // //         {memberId: " memberId"},

// // //         {}

// // //       ]
// // //       for (const body of bodyData) {
// // //         const response = await request(app).post("/updateolduser").send(body)
// // //         expect(response.statusCode).toBe(400)
// // //       }
// // //     })
// // //   })
// // // })
