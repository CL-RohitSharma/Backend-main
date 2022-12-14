'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_eligibility_benefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient_eligibility_benefit.init({
    id: {
      type: DataTypes.INTEGER,
        primaryKey: true
    },
    patientEligibilityUid: DataTypes.INTEGER,
    benefitInfoCode: DataTypes.STRING,
    benefitInfoDesc: DataTypes.STRING,
    serviceTypeDesc: DataTypes.STRING,
    coverageStatusCode: DataTypes.STRING,
    coverageStatusLabel: DataTypes.STRING,
    networkType: DataTypes.STRING,
    coverageType: DataTypes.STRING,
    additionalInfo: DataTypes.STRING,
    benefitValue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient_eligibility_benefit',
  });
  return patient_eligibility_benefit;
};