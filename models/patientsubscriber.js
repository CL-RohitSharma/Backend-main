'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientsubscriber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientsubscriber.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
    }
  }
  patientsubscriber.init({
    firstName: DataTypes.STRING,
    middleInitial: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    gender: DataTypes.STRING,
    homePhone: DataTypes.STRING,
    subscriberId: DataTypes.STRING,
    subscriberGroupId: DataTypes.STRING,
    policyId: DataTypes.STRING,
    workPhoneExtn: DataTypes.STRING,
    mobile: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientsubscriber',
  });
  return patientsubscriber;
};