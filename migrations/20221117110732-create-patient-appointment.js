'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('patient_appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appointmentId: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.DATE,
      },
      notes: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE,
      
    },
      serviceLocationUid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'servicelocations',
          key: 'id'
        }
      },
      patientinsuranceUid: {
        type: Sequelize.INTEGER,
        
      },
      patientUid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'patient_logins',
          key: 'id'
        }
      },
      providerUid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'provider_details',
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
    await queryInterface.dropTable('patient_appointments');
  }
};