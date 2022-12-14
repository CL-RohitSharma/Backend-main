// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.userstatusupdate= async (req,res) => {
// try{
//     const {log} = req;
//     const sqluserstatus=SQL `UPDATE user_login SET Status='Suspended' WHERE LoginID=${log} `;
//     const [query] = await con.promise().query(sqluserstatus).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };

const models = require('../models');
const user_login=models.user_login;
exports.userstatusupdate=async(req,res)=>{
    try{
        const {log} = req;
        const query=user_login.update(
            {
                Status:"Suspended"
            },
            {
                where:{LoginID:log},
            }
        ).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        return query;


    }catch(err){
        throw err;
    }
}
