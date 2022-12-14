// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.displayuserlist= async (req,res) => {
// try{
//     const sqluserlist=SQL `SELECT FirstName,MiddleName,LastName,LoginID,Location,Status,Email,PhoneNo,Role FROM user_login `;
//     const [query] = await con.promise().query(sqluserlist).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };

const models = require('../models');
const user_login=models.user_login;
exports.displayuserlist=async(req,res)=>{
    try{
        const query=user_login.findAll({
            attributes:['FirstName','middleName','LastName','LoginID','Location','Status','Email','PhoneNo','Role']
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
