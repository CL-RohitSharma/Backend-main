'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_insurances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primaryInsurance: {
        type: Sequelize.STRING
      },
      memberId: {
        type: Sequelize.STRING
      },
      groupId: {
        type: Sequelize.STRING
      },
      healthplan: {
        type: Sequelize.STRING
      },
      isSecondaryInsurance: {
        type: Sequelize.STRING
      },
      secondaryInsurance: {
        type: Sequelize.STRING
      },
      memberId1: {
        type: Sequelize.STRING
      },
      groupId1: {
        type: Sequelize.STRING
      },
      healthPlan1: {
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
    await queryInterface.dropTable('patient_insurances');
  }
};