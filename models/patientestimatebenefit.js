'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientestimatebenefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientestimatebenefit.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
      patientestimatebenefit.belongsTo(models.patientestimate,{foreignKey:'patientestimateUid',as:'patientestimate'})
    }
  }
  patientestimatebenefit.init({
    primaryCoinsurancePercentage: DataTypes.DOUBLE,
    primaryDeductible: DataTypes.DOUBLE,
    primarypayerIndicator: DataTypes.STRING,
    secCoinsurancePercentage: DataTypes.DOUBLE,
    secDeductible: DataTypes.DOUBLE,
    secPayerIndicator: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    patientestimateUid:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientestimatebenefit',
  });
  return patientestimatebenefit;
};