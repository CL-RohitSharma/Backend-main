// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.userloginid= async (req,res) => {
// try{
//     const {uid} = req;
//     console.log(uid);
//     const sqluserloginid=SQL `SELECT LoginID FROM user_login WHERE LoginID=${uid} AND Status='Active'`;
//     const [query] = await con.promise().query(sqluserloginid).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };

const models = require('../models');
const user_login = models.user_login;
exports.userloginid = async (req,res , LoginID) => {
    try{
        const query =  await user_login.findAll({
            attributes:['LoginID','SecQue1','SecAns1','SecQue2','SecAns2','SecQue3','SecAns3'],
            where:{
             LoginID: LoginID,
              Status:"Active"}
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
