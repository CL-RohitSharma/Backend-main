'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_payers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      PID: {
        type: Sequelize.INTEGER
      },
      payerTypeUid: {
        type: Sequelize.INTEGER
      },
      payerUid: {
        type: Sequelize.INTEGER
      },
      planID: {
        type: Sequelize.STRING
      },
      planName: {
        type: Sequelize.STRING
      },
      payername: {
        type: Sequelize.STRING
      },
      payerIdentification: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('patient_payers');
  }
};