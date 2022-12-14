'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_additionalinfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primaryPhoneNumber: {
        type: Sequelize.STRING
      },
      secondaryPhoneNumber: {
        type: Sequelize.STRING
      },
      primaryPhoneType: {
        type: Sequelize.STRING
      },
      secondaryPhoneType: {
        type: Sequelize.STRING
      },
      driverLicenseId: {
        type: Sequelize.STRING
      },
      driverLicenseState: {
        type: Sequelize.STRING
      },
      stateIssued: {
        type: Sequelize.STRING
      },
      stateIssuedId: {
        type: Sequelize.STRING
      },
      isIdentificationVerified: {
        type: Sequelize.STRING
      },
      photoIdPath1: {
        type: Sequelize.STRING
      },
      photoIdPath2: {
        type: Sequelize.STRING
      },
      photoIdPath3: {
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
    await queryInterface.dropTable('patient_additionalinfos');
  }
};