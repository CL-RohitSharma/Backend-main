'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      middleInitial: {
        type: Sequelize.STRING
      },
      DateofBirth: {
        type: Sequelize.DATE
      },
      Location: {
        type: Sequelize.STRING
      },
      patientEmailId: {
        type: Sequelize.STRING
      },
      patient_id:{
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.STRING
      },
      isCashPayer: {
        type: Sequelize.STRING
      },
      last_appointment: {
        type: Sequelize.STRING
      },
      next_appointment: {
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
    await queryInterface.dropTable('patient_logins');
  }
};