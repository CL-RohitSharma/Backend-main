'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patientestimatebenefits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primaryCoinsurancePercentage: {
        type: Sequelize.DOUBLE
      },
      primaryDeductible: {
        type: Sequelize.DOUBLE
      },
      primarypayerIndicator: {
        type: Sequelize.STRING
      },
      secCoinsurancePercentage: {
        type: Sequelize.DOUBLE
      },
      secDeductible: {
        type: Sequelize.DOUBLE
      },
      secPayerIndicator: {
        type: Sequelize.STRING
      },
      patientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'patient_logins',
          key: 'id'
        }
      },
      patientestimateUid:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'patientestimates',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patientestimatebenefits');
  }
};