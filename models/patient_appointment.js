'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patient_appointment.belongsTo(models.patient_login,{foreignKey:'patientUid',as:'patient_login'})
      patient_appointment.belongsTo(models.provider_details,{foreignKey:'providerUid',as:'provider_details'})
      patient_appointment.belongsTo(models.servicelocation,{foreignKey:'serviceLocationUid',as:'servicelocation'})
    }
  }
  patient_appointment.init({
    appointmentId: DataTypes.STRING,
    endTime: DataTypes.DATE,
    notes: DataTypes.STRING,
    startTime: DataTypes.DATE,
    serviceLocationUid: DataTypes.INTEGER,
    patientinsuranceUid: DataTypes.INTEGER,
    patientUid: DataTypes.INTEGER,
    providerUid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patient_appointment',
  });
  return patient_appointment;
};