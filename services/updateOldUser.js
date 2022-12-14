// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.updateolduser= async (req,res) => {
// try{
//     const {fname,midname,lname,emai,phone,loginid,location,role,status} = req;
//     const sqluserupdate=SQL `UPDATE user_login SET FirstName = ${fname},MiddleName= ${midname},LastName= ${lname},Email= ${emai},PhoneNo= ${phone},Location= ${location},Role= ${role}, Status= ${status} WHERE LoginID = ${loginid}`;
//     const [query] = await con.promise().query(sqluserupdate).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };


const models = require('../models');
const user_login=models.user_login;



exports.updateolduser=async(req,res)=>{
    try{
        const {fname,midname,lname,emai,phone,loginid,location,role,status} = req;
        const query=user_login.update(
            {
                FirstName:fname,
                MiddleName:midname,
                LastName:lname,
                Email:emai,
                PhoneNo:phone,
                Location:location,
                Role:role,
                Status:status

            },
            {
                where:{LoginID:loginid},
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