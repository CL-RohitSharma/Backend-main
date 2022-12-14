'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientestimate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientestimate.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
      patientestimate.belongsTo(models.patient_appointment,{foreignKey:'appointmentId',as:'patient_appointment'})
      patientestimate.belongsTo(models.patient_insurance,{foreignKey:'patientinsuranceUid',as:'patient_insurance'})

    }
  }
  patientestimate.init({
    patientToPay: DataTypes.DOUBLE,
    primaryPayerToPay: DataTypes.DOUBLE,
    secPayerToPay: DataTypes.DOUBLE,
    copay: DataTypes.DOUBLE,
    coinsurance: DataTypes.DOUBLE,
    patientId: DataTypes.INTEGER,
    appointmentId: DataTypes.INTEGER,
    patientinsuranceUid:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientestimate',
  });
  return patientestimate;
};