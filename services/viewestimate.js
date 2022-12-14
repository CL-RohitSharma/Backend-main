const models = require("../models");
const Patientaddress=models.patientaddress;
const Patient_login=models.patient_login;
const appointment=models.patient_appointment;
const Provider_details=models.provider_details;
const Servicelocation=models.servicelocation;
const Patientestimate=models.patientestimate;
const Patientestimatebenefit=models.patientestimatebenefit;
const Patient_insurance=models.patient_insurance;
exports.viewestimate= async (req,res) => { 
    try{
      const query=Patientestimatebenefit.findAll({
        attributes:["primaryDeductible"],
        include:[{
          model:Patientestimate,
          as:"patientestimate",
          attributes:["copay"],
        include: [
            {
              model: appointment,
              as: "patient_appointment",
              attributes: ["startTime"],
              include:[
                {
                  model:Patient_login,
                  as:"patient_login",
                  attributes: ["Location", "firstName", "DateofBirth","patient_id","middleInitial","LastName","id"],
                },
                 {
                  model: Provider_details,
                  as: "provider_details",
                  attributes: ["firstName","lastName","middleInitial"],
                },
                {
                  model:Servicelocation,
                  as:"servicelocation",
                  attributes:["visitReason"]
                }

              ]
            },
            {
              model:Patient_insurance,
              as:"patient_insurance",
              attributes:["primaryInsurance"]
            }
           
          ],
        }]
      }) .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
       return query;
    }catch(err){
            throw err;
        }
        };
