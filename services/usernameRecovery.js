// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.userrecovery= async (req,res) => {
// try{
//     const {email} = req;
//     const sqluserrec=SQL `SELECT LoginID FROM user_login WHERE Email = ${email} AND Status='Active'`;
//     const [query] = await con.promise().query(sqluserrec).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };
const models = require('../models');
const user_login=models.user_login;
exports.userrecovery=async(req,res)=>{
    try{
        const {email}=req;
        const query=user_login.findAll({
            attributes:['LoginID'],
            where:{Email:email,Status:"Active"
            }
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

