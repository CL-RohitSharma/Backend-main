const models = require('../models');
const Patient_additional=models.patient_additionalinfo;
const Patient_login=models.patient_login;


exports.updateidentification= async (req,res) => {
    try{
        const {driveid,stateid,drivestate,stateissued,identification,patientid,ssn} = req;
    return Patient_login.update(
        { ssn: ssn },
        { where: { id: patientid } }
      ).then(patient_login=>{
           console.log(patient_login)
           const query= Patient_additional.update({driverLicenseId:driveid,
                    driverLicenseState:drivestate,
                    stateIssued:stateissued,
                    stateIssuedId:stateid,
                    isIdentificationVerified:identification,
                    
                },{
                    where:{patientId:patientid}
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