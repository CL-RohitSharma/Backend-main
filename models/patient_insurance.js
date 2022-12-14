'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_insurance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patient_insurance.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})

    }
  }
  patient_insurance.init({
    primaryInsurance: DataTypes.STRING,
    memberId: DataTypes.STRING,
    groupId: DataTypes.STRING,
    healthplan: DataTypes.STRING,
    isSecondaryInsurance: DataTypes.STRING,
    secondaryInsurance: DataTypes.STRING,
    memberId1: DataTypes.STRING,
    groupId1: DataTypes.STRING,
    healthPlan1: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patient_insurance',
  });
  return patient_insurance;
};