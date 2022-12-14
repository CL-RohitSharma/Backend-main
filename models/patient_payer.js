'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient_payer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patient_payer.init({
    id: {
      type: DataTypes.INTEGER,
        primaryKey: true
    },
    PID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {         
        model: 'patient_logins',
        key: 'id'
      }
    },
    payerTypeUid: DataTypes.INTEGER,
    payerUid: DataTypes.INTEGER,
    planID: DataTypes.STRING,
    planName: DataTypes.STRING,
    payername: DataTypes.STRING,
    payerIdentification: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient_payer',
  });
  return patient_payer;
};