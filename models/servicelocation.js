'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicelocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicelocation.init({
    visitReason: DataTypes.STRING,
    visitReasonDescription: DataTypes.STRING,
    serviceLocationName: DataTypes.STRING,
    practiceId: DataTypes.STRING,
    s1phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    npi: DataTypes.STRING,
    s1street1: DataTypes.STRING,
    s1street2: DataTypes.STRING,
    s1zip: DataTypes.STRING,
    s1state: DataTypes.STRING,
    s1city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'servicelocation',
  });
  return servicelocation;
};