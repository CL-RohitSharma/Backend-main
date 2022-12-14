// const con = require('../dbconnection');
// const SQL = require('sql-template-strings');
// const bcrypt = require ('bcrypt');
// const { query } = require('../dbconnection');
// const saltRounds = 10;

// exports.resetpassword = async (req, res) => {
//     const {loginid, newPassword, confirmPassword, question1, question2, question3, answer1, answer2, answer3} = req;

//     try {
         
//         newuser = 'alex.green'
//             hash = await bcrypt.hash(newPassword,saltRounds);
//             const queryString = `UPDATE ezppaydb.user_login SET Password = "${hash}", SecQue1 = "${question1}", SecQue2 = "${question2}", SecQue3 = "${question3}", SecAns1 = "${answer1}", SecAns2 = "${answer2}", SecAns3 = "${answer3}" WHERE LoginID = "${loginid}";`;
//             const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
//             return query   
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// };

const bcrypt = require ('bcrypt');
const saltRounds = 10;
const models = require('../models');
const user_login=models.user_login;
exports.resetpassword = async (req, res) => { 
   
    try {
        const {loginid, newPassword, confirmPassword, question1, question2, question3, answer1, answer2, answer3} = req;
        //         newuser = 'alex.green'
        hash = await bcrypt.hash(newPassword,saltRounds);
        const query=user_login.update(
            {
                Password:hash,
                SecQue1:question1,
                SecQue2:question2,
                SecQue3:question3,
                SecAns1:answer1,
                SecAns2:answer2,
                SecAns3:answer3

            },
            {
                where:{LoginID:loginid},
            }
        ).catch((err)=>{
            if(err){
                console.log(err);
            }
        });
        return query 
            } catch (err) {
                console.log(err);
                throw err;
            }

};
