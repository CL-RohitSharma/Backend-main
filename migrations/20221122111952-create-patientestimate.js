'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patientestimates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientToPay: {
        type: Sequelize.DOUBLE
      },
      primaryPayerToPay: {
        type: Sequelize.DOUBLE
      },
      secPayerToPay: {
        type: Sequelize.DOUBLE
      },
      copay: {
        type: Sequelize.DOUBLE
      },
      coinsurance: {
        type: Sequelize.DOUBLE
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
    await queryInterface.dropTable('patientestimates');
  }
};