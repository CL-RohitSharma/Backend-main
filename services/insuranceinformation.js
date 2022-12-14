// const con = require('../dbconnection');

// exports.insuranceinfo= async (req,res) => {
// try{
//      console.log(req);
//     const {primaryInsurance, healthPlan, memberId, groupId} = req;
//     const sqlpatientinsurance= `INSERT INTO patient_insurance SET primaryInsurance ="${primaryInsurance}", healthPlan="${healthPlan}", memberId="${memberId}", groupId="${groupId}", PID = '2'`;
//     console.log(sqlpatientinsurance)

//     const [query] = await con.promise().query(sqlpatientinsurance).catch(err => {throw err});

//     return query;
// }catch(err){
//     throw err;
// }
// };

// // const email2 = patientlogin.email;
// exports.guarantorinfo= async (req,res) => {
//     try{
//         console.log(req);
//         const { pfirst_name, plast_name, pemail, pdob, pgender, ppnumber} = req;
//         const sqlpatientguarantor=`INSERT INTO patientguarantor SET firstName="${pfirst_name}",lastName="${plast_name}",email="${pemail}",birthDate="${pdob}",gender="${pgender}",mobile="${ppnumber}", PID = '3'`;
//         const [query] = await con.promise().query(sqlpatientguarantor).catch(err => {throw err});

//         return query;
//     }catch(err){
//         throw err;
//     }
//     };

//     // const email3 = patientlogin.email;

// exports.subscriberinfo= async (req,res) => {
//     try{
//         console.log(req);
//         const {sub_first_name,sub_last_name,sub_email,sub_dob,sub_gender,sub_phoneNumber} = req;
//         const sqlsubscriberinfo=`INSERT INTO patientsubscriber SET firstName="${sub_first_name}",lastName="${sub_last_name}",emailId="${sub_email}",birthDate="${sub_dob}",gender="${sub_gender}",mobile="${sub_phoneNumber}", PID = '4'`;
//         const [query] = await con.promise().query(sqlsubscriberinfo).catch(err => {throw err});

//         return query;
//     }catch(err){
//         throw err;
//     }
//     };

// const models = require("../models")
// const Patient_guarantor=models.patientguarantor;
// const Patient_subscriber=models.patientsubscriber;
// const Patient_insurance=models.patient_insurance;

// exports.insuranceinfo= async (req,res) => {
//     try{
//         const {primaryInsurance, healthPlan, memberId, groupId,pfirst_name, plast_name, pemail, pdob, pgender, ppnumber,sub_first_name,sub_last_name,sub_email,sub_dob,sub_gender,sub_phoneNumber,patientid} = req
//         const patient=Patient_insurance.create({
//             primaryInsurance:primaryInsurance,
//             healthPlan:healthPlan,
//             memberId:memberId,
//             groupId:groupId,
//             PatientId:patientid
//         }).catch((err)=>{
//             if(err){
//                 console.log(err);
//             }
//         });
// await Patient_guarantor.create({
//     firstName:pfirst_name,
//     lastName:plast_name,
//     email:pemail,
//     dateOfBirth:pdob,
//     gender:pgender,
//     mobile:ppnumber,
//     patientId:patientid
// })
// await Patient_subscriber.create({
//     firstName:sub_first_name,
//     lastName:sub_last_name,
//     email:sub_email,
//     dateOfBirth:sub_dob,
//     gender:sub_gender,
//     mobile:sub_phoneNumber,
//     patientId:patientid

// }).catch((err)=>{
//     if(err){
//         console.log(err);
//     }
// });

//    return patient;
// }catch(err){
//         throw err;
//     }
//     };
const models = require("../models");
const Patient_guarantor = models.patientguarantor;
const Patient_subscriber = models.patientsubscriber;
const Patient_insurance = models.patient_insurance;
exports.insuranceinfo = async (req, res) => {
  try {
    const {
      primaryInsurance,
      healthPlan,
      memberId,
      groupId,
      pfirst_name,
      plast_name,
      pemail,
      pdob,
      pgender,
      ppnumber,
      sub_first_name,
      sub_last_name,
      sub_email,
      sub_dob,
      sub_gender,
      sub_phoneNumber,
      patientid,
    } = req;
    const query = Patient_insurance.create({
      primaryInsurance: primaryInsurance,
      memberId: memberId,
      groupId: groupId,
      healthplan: healthPlan,
      patientId: patientid,
    });
    await Patient_guarantor.create({
      firstName: pfirst_name,
      lastName: plast_name,
      email: pemail,
      dateOfBirth: pdob,
      gender: pgender,
      mobile: ppnumber,
      patientId: patientid,
    });
    await Patient_subscriber.create({
      firstName: sub_first_name,
      lastName: sub_last_name,
      email: sub_email,
      dateOfBirth: sub_dob,
      gender: sub_gender,
      mobile: sub_phoneNumber,
      patientId: patientid,
    });
    return query;
  } catch (err) {
    throw err;
  }
};

exports.insuranceinfoupdate = async (req, res) => {
  try {
    const {
      primaryInsurance,
      healthPlan,
      memberId,
      groupId,
      pfirst_name,
      plast_name,
      pemail,
      pdob,
      pgender,
      ppnumber,
      sub_first_name,
      sub_last_name,
      sub_email,
      sub_dob,
      sub_gender,
      sub_phoneNumber,
      patientid,
    } = req;
    const query = Patient_insurance.update(
      {
        primaryInsurance: primaryInsurance,
        memberId: memberId,
        groupId: groupId,
        healthplan: healthPlan,
      },
      {
        where: { patientId: patientid },
      }
    );
    await Patient_guarantor.update(
      {
        firstName: pfirst_name,
        lastName: plast_name,
        email: pemail,
        dateOfBirth: pdob,
        gender: pgender,
        mobile: ppnumber,
      },
      {
        where: { patientId: patientid },
      }
    );
    await Patient_subscriber.update(
      {
        firstName: sub_first_name,
        lastName: sub_last_name,
        email: sub_email,
        dateOfBirth: sub_dob,
        gender: sub_gender,
        mobile: sub_phoneNumber,
      },
      {
        where: { patientId: patientid },
      }
    );
    return query;
  } catch (err) {
    throw err;
  }
};
