// const con = require('../dbconnection');
// const SQL = require('sql-template-strings');


// exports.searchpatient= async (req,res) => {
// try{
//     const sqluserrec=SQL `SELECT  FirstName,LastName,PhoneNo,DateofBirth,patientEmailId,last_appointment,next_appointment FROM patient_login;`;
//     const [query] = await con.promise().query(sqluserrec).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };
const models = require('../models');
const patient_login=models.patient_login;
exports.searchpatient=async(req,res)=>{
    try{

        const query=patient_login.findAll({
           attributes:['FirstName','LastName','DateOfBirth','patientEmailId','last_appointment','next_appointment']
        }).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        return query;


    }catch(err){
        throw err;
    }
}
