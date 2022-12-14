'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('servicelocations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      visitReason: {
        type: Sequelize.STRING
      },
      visitReasonDescription: {
        type: Sequelize.STRING
      },
      serviceLocationName: {
        type: Sequelize.STRING
      },
      practiceId: {
        type: Sequelize.STRING
      },
      s1phone: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      npi: {
        type: Sequelize.STRING
      },
      s1street1: {
        type: Sequelize.STRING
      },
      s1street2: {
        type: Sequelize.STRING
      },
      s1zip: {
        type: Sequelize.STRING
      },
      s1state: {
        type: Sequelize.STRING
      },
      s1city: {
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
    await queryInterface.dropTable('servicelocations');
  }
};