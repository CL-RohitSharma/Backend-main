'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientbillingaddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientbillingaddress.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
    }
  }
  patientbillingaddress.init({
    addressLine1: DataTypes.STRING,
    addressLine2: DataTypes.STRING,
    city1: DataTypes.STRING,
    zip1: DataTypes.STRING,
    state1: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientbillingaddress',
  });
  return patientbillingaddress;
};