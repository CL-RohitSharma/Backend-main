// const con = require('../dbconnection');
// const SQL = require('sql-template-strings')

// exports.addnewuser= async (req,res) => {
// try{
//     const {fname, midname, lname, emai, phone, loginid, location, role, temppass, status} = req;
//     const sqlnewuser=SQL `INSERT INTO user_login SET FirstName=${fname}, Middlename=${midname}, LastName=${lname}, Email=${emai}, PhoneNo=${phone}, LoginID=${loginid}, Location=${location}, Role=${role}, TempPass=${temppass}, Status=${status}`;
//     const [query] = await con.promise().query(sqlnewuser).catch(err => {throw err});
//     return query;
// }catch(err){
//     throw err;
// }
// };
const models = require('../models');
const user_login=models.user_login;
exports.addnewuser=async(req,res)=>{
    try{
        const {fname, midname, lname, emai, phone, loginid, location, role, temppass, status} = req;
        const query=user_login.create({
            FirstName:fname,
            MiddleName:midname,
            LastName:lname,
            PhoneNo:phone,
            Email:emai,
            LoginID:loginid,
            Location:location,
            Role:role,
            TemPass:temppass,
            Status:status
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


