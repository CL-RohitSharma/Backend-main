// const con = require('../dbconnection');
// // const SQL = require('sql-template-strings')

// exports.appointments = async (req, res, currentDate) => {
//     try {
//         const queryString = `Select patient_appointment.startTime,patient_login.Location,patient_login.FirstName as pname,provider_details.firstName as dname,patient_login.patientEmailId from patient_appointment,patient_login,provider_details where patient_login.PID=patient_appointment.PID AND provider_details.providerUid=patient_appointment.providerUid AND patient_appointment.startTime LIKE "${currentDate}%"`;
//         const [query] = await con.promise().query(queryString).catch(err => {throw err});
//         return query;
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// };

const models = require("../models");
var sequelize = require("../models");
const Patient_login = models.patient_login;
const patient_appointment = models.patient_appointment;
const Patient_providers = models.provider_details;

exports.adminappointments = async (req, res, datatime) => {
  try {
    const query = patient_appointment
      .findAll({
        where: sequelize.Sequelize.where(
          sequelize.Sequelize.fn("date", sequelize.Sequelize.col("startTime")),
          "<=>",
          datatime
        ),
        attributes: ["startTime"],
        include: [
          {
            model: Patient_login,
            as: "patient_login",
            attributes: ["Location", "firstName", "patientEmailId"],
          },
          {
            model: Patient_providers,
            as: "provider_details",
            attributes: ["firstName"],
          },
        ],
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });

    return query;
    
  } catch (err) {
    console.log(err);
    throw err;
  }
};

exports.appointments = async (req, res, datatime,location) => {
  try {
    const query = patient_appointment
      .findAll({
       
        where: sequelize.Sequelize.where(
          sequelize.Sequelize.fn("date", sequelize.Sequelize.col("startTime")),
          "<=>",
          datatime
        ),
        
        attributes: ["startTime"],
        include: [
          {
            model: Patient_login,
            as: "patient_login",
            where: {"Location":location},
            attributes: ["Location", "firstName", "patientEmailId"],
          },
          {
            model: Patient_providers,
            as: "provider_details",
            attributes: ["firstName"],
          },
        ],
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    return query;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

