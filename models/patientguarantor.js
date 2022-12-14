'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientguarantor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientguarantor.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
    }
  }
  patientguarantor.init({
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    homePhone: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    workPhone: DataTypes.STRING,
    prefix: DataTypes.STRING,
    suffix: DataTypes.STRING,
    workPhoneExtn: DataTypes.STRING,
    mobile: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientguarantor',
  });
  return patientguarantor;
};