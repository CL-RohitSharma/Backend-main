'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_eligibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      // define association here
      patient_eligibility.belongsTo(models.patient_payer,{foreignKey:'payerId',as:'patient_payer'})
      patient_eligibility.belongsTo(models.subscriber_information,{foreignKey:'subscriberId',as:'subscriber_information'})
    }
  }
  patient_eligibility.init({
    id: {
      type: DataTypes.INTEGER,
        primaryKey: true
    },
    PID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {         
        model: 'patient_logins',
        key: 'id'
      }
    },
    patientPayerID: DataTypes.STRING,
    eligibilityStatusID: DataTypes.STRING,
    copay: DataTypes.DECIMAL,
    deductible: DataTypes.DECIMAL,
    eligibilityRunRemarks: DataTypes.STRING,
    eligibilityRunTraceNumber: DataTypes.INTEGER,
    eligibilityStatusDesc: DataTypes.STRING,
    YTD: DataTypes.DECIMAL,
    deductibleMessage: DataTypes.STRING,
    payerId: DataTypes.INTEGER,
    subscriberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patient_eligibility',
  });
  return patient_eligibility;
};