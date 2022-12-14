const models = require('../models');
const Patient_additional=models.patient_additionalinfo;
const Patient_login=models.patient_login;
const Patientbillingaddress=models.patientbillingaddress;
const Patientaddress=models.patientaddress;


exports.updatecontact= async (req,res) => { 
    try{
        const {fname, mname, lname, mstreet1, mstreet2, mcity, mzip, bstreet1, bstreet2, bstate, bcity, bzip, pphone, email, phonetype, gender,dob,patientid}=req
        const patient=await Patient_login.update({
           
            FirstName:fname,
            middleInitial:mname,
            LastName:lname,
            patientEmailId:email,
            gender:gender,
            DateofBirth:dob
        },
        {
            where:{id:patientid},
        })
        await Patient_additional.update({
            primaryPhoneType:phonetype,
            primaryPhoneNumber:pphone,
        },{
            where:{patientId:patientid},
        })
        await Patientaddress.create({
            street1:mstreet1,
            street2:mstreet2,
            city:mcity,
            zip:mzip
        },
        {
            where:{patientId:patientid},
        })
        await Patientbillingaddress.update({
            addressLine1:bstreet1,
            addressLine2:bstreet2,
            state1:bstate,
            city1:bcity,
            zip1:bzip
        },
        {
            where:{patientId:patientid},
        }
        )
       return patient;
    }catch(err){
            throw err;
        }
        };