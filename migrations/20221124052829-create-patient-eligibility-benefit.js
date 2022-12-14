'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_eligibility_benefits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientEligibilityUid: {
        type: Sequelize.INTEGER
      },
      benefitInfoCode: {
        type: Sequelize.STRING
      },
      benefitInfoDesc: {
        type: Sequelize.STRING
      },
      serviceTypeDesc: {
        type: Sequelize.STRING
      },
      coverageStatusCode: {
        type: Sequelize.STRING
      },
      coverageStatusLabel: {
        type: Sequelize.STRING
      },
      networkType: {
        type: Sequelize.STRING
      },
      coverageType: {
        type: Sequelize.STRING
      },
      additionalInfo: {
        type: Sequelize.STRING
      },
      benefitValue: {
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
    await queryInterface.dropTable('patient_eligibility_benefits');
  }
};