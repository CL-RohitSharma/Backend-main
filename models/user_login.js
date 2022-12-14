'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_login.init({
    FirstName: DataTypes.STRING,
    MiddleName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    LoginID: DataTypes.STRING,
    PhoneNo: DataTypes.BIGINT,
    Location: DataTypes.STRING,
    Role: DataTypes.STRING,
    TemPass: DataTypes.STRING,
    Password: DataTypes.STRING,
    SecQue1: DataTypes.STRING,
    SecAns1: DataTypes.STRING,
    SecQue2: DataTypes.STRING,
    SecAns2: DataTypes.STRING,
    SecQue3: DataTypes.STRING,
    SecAns3: DataTypes.STRING,
    Status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_login',
  });
  return user_login;
};