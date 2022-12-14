'use strict';

const { Sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_eligibilities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PID: {
        type: Sequelize.INTEGER
      },
      patientPayerID: {
        type: Sequelize.STRING
      },
      eligibilityStatusID: {
        type: Sequelize.STRING
      },
      copay: {
        type: Sequelize.DECIMAL
      },
      deductible: {
        type: Sequelize.DECIMAL
      },
      eligibilityRunRemarks: {
        type: Sequelize.STRING
      },
      eligibilityRunTraceNumber: {
        type: Sequelize.INTEGER
      },
      eligibilityStatusDesc: {
        type: Sequelize.STRING
      },
      YTD: {
        type: Sequelize.DECIMAL
      },
      deductibleMessage: {
        type: Sequelize.STRING
      },
      payerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'patient_payer',
          key: 'id'
        }
      },
      subscriberId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'subscriber_information',
          key: 'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('patient_eligibilities');
  }
};