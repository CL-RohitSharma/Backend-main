'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // patient_login.hasOne(models.patient_additionalinfo, {as:'patient_additional'})
    }
  }
  patient_login.init({
    id: {
      type: DataTypes.INTEGER,
        primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleInitial: DataTypes.STRING,
    DateofBirth: DataTypes.DATE,
    Location: DataTypes.STRING,
    patientEmailId: DataTypes.STRING,
    gender: DataTypes.STRING,
    patient_id: DataTypes.STRING,
    ssn: DataTypes.STRING,
    isCashPayer: DataTypes.STRING,
    last_appointment: DataTypes.STRING,
    next_appointment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient_login',
  });
  return patient_login;
};