// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.userLogin1 = async (req, res) => {
//     try {

//         const {loginid}= req;

//         const queryString =  SQL `SELECT Password FROM ezppaydb.user_login WHERE LoginID = ${loginid} AND Status='Active'`;
//         const [query] = await con.promise().query(queryString).catch(err => {throw err});
//         return query;
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }

// };

const models = require("../models");
const user_login = models.user_login;
exports.userLogin1 = async (req, res) => {
  try {
    const { loginid } = req;
    const query = user_login.findAll({
        attributes: ["Password", "Status"],
        where: { LoginID: loginid },
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
    return query;
  } catch (err) {
    throw err;
  }
};
