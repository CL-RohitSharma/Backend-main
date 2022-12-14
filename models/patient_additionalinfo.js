'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_additionalinfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patient_additionalinfo.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
    }
  }
  patient_additionalinfo.init({
    primaryPhoneNumber: DataTypes.STRING,
    secondaryPhoneNumber: DataTypes.STRING,
    primaryPhoneType: DataTypes.STRING,
    secondaryPhoneType: DataTypes.STRING,
    driverLicenseId: DataTypes.STRING,
    driverLicenseState: DataTypes.STRING,
    stateIssued: DataTypes.STRING,
    stateIssuedId: DataTypes.STRING,
    isIdentificationVerified: DataTypes.STRING,
    photoIdPath1:DataTypes.STRING,
    photoIdPath2:DataTypes.STRING,
    photoIdPath3:DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patient_additionalinfo',
  });
  return patient_additionalinfo;
};