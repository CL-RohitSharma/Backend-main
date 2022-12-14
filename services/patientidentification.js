// const con = require('../dbconnection');
// const SQL = require('sql-template-strings');


// exports.patientidentification= async (req,res) => {
// try{
    
//     const {ssn,driveid,stateid,drivestate,stateissued,identification} = req;
//     const sqluserrec=SQL `INSERT INTO patientadditionalinfo SET patientadditionalinfo.driverLicenseId=${driveid},patientadditionalinfo.driverLicenseState=${drivestate},patientadditionalinfo.stateIssuedId=${stateid},patientadditionalinfo.stateIssued=${stateissued},patientadditionalinfo.isIdentificationVerified=${identification},PID=(SELECT PID  FROM patient_login p WHERE p.ssn=${ssn});`;
//     const [query] = await con.promise().query(sqluserrec).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };
const models = require('../models');
const Patient_additional=models.patient_additionalinfo;
const Patient_login=models.patient_login;


exports.patientidentification= async (req,res) => {
    try{
        const {driveid,stateid,drivestate,stateissued,identification,patientid,ssn} = req;
    return Patient_login.update(
        { ssn: ssn },
        { where: { id: patientid } }
      ).then(patient_login=>{
           console.log(patient_login)
           const query= Patient_additional.create({driverLicenseId:driveid,
                    driverLicenseState:drivestate,
                    stateIssued:stateissued,
                    stateIssuedId:stateid,
                    isIdentificationVerified:identification,
                    patientId:patientid
                })
              return query;
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        })
    }catch(err){
            throw err;
        }
        };