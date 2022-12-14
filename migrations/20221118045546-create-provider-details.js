'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('provider_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      middleInitial: {
        type: Sequelize.STRING
      },
      ssn: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      title: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      homePhone: {
        type: Sequelize.STRING
      },
      workPhone: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      payer: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      isReasourceProvider: {
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
    await queryInterface.dropTable('provider_details');
  }
};