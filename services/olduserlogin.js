// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')



// exports.oldUserLogin1 = async (req, res) => {
//     try {
//         // console.log("inside one");
//         const {loginid,password,location}= req;
        
//         const queryString = SQL `SELECT * FROM user_login WHERE loginid = ${loginid} AND location = ${location}  `;
//         const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
//         return query;
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
    
// };

const models = require('../models');
const user_login=models.user_login;
exports.oldUserLogin1=async(req,res)=>{
    try{
        const {loginid,password,location}= req;
        const query=user_login.findAll({
            where:{LoginID:loginid,Location:location}
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

