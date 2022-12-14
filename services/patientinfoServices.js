const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

exports.patientinfo = async (req, res, email) => {
    try {
        const queryString = `SELECT * FROM patient_login, patientadditionalinfo, patient_insurance, patientaddress, patientbillingaddress where patient_login.PID = (SELECT PID from patient_login WHERE patientEmailId = "${email}") AND patientadditionalinfo.PID = (SELECT PID from patient_login WHERE patientEmailId = "${email}") AND patient_insurance.PID = (SELECT PID from patient_login WHERE patientEmailId = "${email}") AND patientaddress.PID = (SELECT PID from patient_login WHERE patientEmailId = "${email}") AND patientbillingaddress.PID = (SELECT PID from patient_login WHERE patientEmailId = "${email}") ;`;
        const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
        return query;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
