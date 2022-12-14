const con = require('../dbconnection');
const SQL = require('sql-template-strings');
const { query } = require('../dbconnection');

exports.passwordrecovery = async (req, res) => {

    try {
            const queryString = SQL`SELECT LoginID FROM user_login WHERE LoginID=? AND Status="Active"`;
            const [query] = await con.promise().query(queryString).catch(err => {throw err}); 
            return query
        }
            
    catch (err) {
        console.log(err);
        throw err;
    }
};
