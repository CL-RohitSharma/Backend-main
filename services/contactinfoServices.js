// const con = require('../dbconnection');
// // const SQL = require('sql-template-strings')


// exports.patientlogin= async (req,res) => {


// try{
//     const {fname, mname, lname, mstreet1, mstreet2, mstate, mcity, mzip, bstreet1, bstreet2, bstate, bcity, bzip, pphone, email, phonetype, dob, gender} = req;
//     const sqlpatientlogin = `INSERT INTO patient_login SET FirstName="${fname}", MiddleInitial="${mname}", LastName="${lname}", patientEmailId="${email}", Location="Radiology", DateofBirth="${dob}";`;
//     console.log(sqlpatientlogin)
//     const [query] = await con.promise().query(sqlpatientlogin).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };

// exports.additionalinfo= async (req,res) => {

// // const {emailinsu} = req;
// // console.log(emailinsu)


//     try{
//         const {fname, mname, lname, mstreet1, mstreet2, mstate, mcity, mzip, bstreet1, bstreet2, bstate, bcity, bzip, pphone, email, phonetype, dob, gender} = req;
//         const sqladditional = `INSERT INTO patientadditionalinfo SET primaryPhoneNumber = "${pphone}", primaryPhoneType = "${phonetype}", PID =  (SELECT PID  FROM patient_login p WHERE p.patientEmailId="${email}");`;
//         console.log(sqladditional)
//         const [query] = await con.promise().query(sqladditional).catch(err => {throw err});
//         return query;
//     }catch(err){
//         throw err;
//     }
// };

// exports.billingaddress= async (req,res) => {
//         try{
//             const {fname, mname, lname, mstreet1, mstreet2, mstate, mcity, mzip, bstreet1, bstreet2, bstate, bcity, bzip, pphone, email, phonetype, dob, gender} = req;
//             const sqlbilling = `INSERT INTO patientbillingaddress SET addressline1 = "${bstreet1}", addressline2 = "${bstreet2}", city1 = "${bcity}", state1 = "${bstate}", zip1 = "${bzip}", PID =  (SELECT PID  FROM patient_login p WHERE p.patientEmailId="${email}");`;
//             console.log(sqlbilling)
//             const [query] = await con.promise().query(sqlbilling).catch(err => {throw err});
//             return query;
//         }catch(err){
//             throw err;
//         }
// };

// exports.mailingaddress= async (req,res) => {
//     try{
//         const {fname, mname, lname, mstreet1, mstreet2, mstate, mcity, mzip, bstreet1, bstreet2, bstate, bcity, bzip, pphone, email, phonetype, dob, gender} = req;
//         const sqlmailing = `INSERT INTO patientaddress SET street1 = "${mstreet1}", street2 = "${mstreet2}", city = "${mcity}", state = "${mstate}", zip = "${mzip}", PID =  (SELECT PID  FROM patient_login p WHERE p.patientEmailId="${email}");`;
//         console.log(sqlmailing)
//         const [query] = await con.promise().query(sqlmailing).catch(err => {throw err});
//         return query;
//     }catch(err){
//         throw err;
//     }
// };



const models = require('../models');
const Patient_additional=models.patient_additionalinfo;
const Patient_login=models.patient_login;
const Patientbillingaddress=models.patientbillingaddress;
const Patientaddress=models.patientaddress;


exports.patientlogin= async (req,res) => { 
    try{
        const {fname, mname, lname, mstreet1, mstreet2, mcity, mzip, bstreet1, bstreet2, bstate, bcity, bzip, pphone, email, phonetype, gender,dob}=req
        const patient=await Patient_login.create({
            FirstName:fname,
            middleInitial:mname,
            LastName:lname,
            patientEmailId:email,
            gender:gender,
            DateofBirth:dob
        })
        const patientId=patient.id
        await Patient_additional.create({
            primaryPhoneType:phonetype,
            primaryPhoneNumber:pphone,
            patientId:patientId
        })
        await Patientaddress.create({
            street1:mstreet1,
            street2:mstreet2,
            city:mcity,
            zip:mzip,
            patientId:patientId

        })
        await Patientbillingaddress.create({
            addressLine1:bstreet1,
            addressLine2:bstreet2,
            state1:bstate,
            city1:bcity,
            zip1:bzip,
            patientId:patientId 
        })
       return patient;
    }catch(err){
            throw err;
        }
        };