'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class provider_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  provider_details.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    middleInitial: DataTypes.STRING,
    ssn: DataTypes.STRING,
    qualification: DataTypes.STRING,
    dob: DataTypes.DATE,
    title: DataTypes.STRING,
    email: DataTypes.STRING,
    homePhone: DataTypes.STRING,
    workPhone: DataTypes.STRING,
    mobile: DataTypes.STRING,
    payer: DataTypes.STRING,
    fax: DataTypes.STRING,
    isReasourceProvider: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'provider_details',
  });
  return provider_details;
};