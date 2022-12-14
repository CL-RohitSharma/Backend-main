const models = require("../models");
const patient_eligibility = models.patient_eligibility;
const patient_payer = models.patient_payer;
const subscriber_information = models.subscriber_information;
const patient_login = models.patient_login;

exports.viewEligibility = async (req, res, email) => {
  try {
    const getPID = await patient_login.findAll({
      attributes: ["id"],
      where: { patientEmailId: email },
    });
    const pid = getPID[0].id;
    const query = await patient_eligibility.findAll({
      attributes: [
        "patientPayerID",
        "eligibilityStatusID",
        "copay",
        "deductible",
        "eligibilityRunRemarks",
        "eligibilityRunTraceNumber",
        "eligibilityStatusDesc",
        "YTD",
        "deductibleMessage",
      ],
      where: { PID: pid },
      include: [
        {
          model: patient_payer,
          as: "patient_payer",
          attributes: ["payername", "payerIdentification", "planName"],
        },
        {
          model: subscriber_information,
          as: "subscriber_information",
          attributes: [
            "name",
            "memberIdNumber",
            "groupNumber",
            "groupName",
            "address",
            "dob",
            "gender",
          ],
        },
      ],
    });
    return query;
  } catch (err) {
    throw err;
  }
};
