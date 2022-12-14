'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientaddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientaddress.belongsTo(models.patient_login,{foreignKey:'patientId',as:'patient_login'})
    }
  }
  patientaddress.init({
    street1: DataTypes.STRING,
    street2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientaddress',
  });
  return patientaddress;
};