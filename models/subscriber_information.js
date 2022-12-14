'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscriber_information extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subscriber_information.init({
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
    name: DataTypes.STRING,
    memberIdNumber: DataTypes.INTEGER,
    groupNumber: DataTypes.INTEGER,
    groupName: DataTypes.STRING,
    address: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subscriber_information',
  });
  return subscriber_information;
};