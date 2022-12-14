'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('subscriber_informations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PID: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      memberIdNumber: {
        type: Sequelize.INTEGER
      },
      groupNumber: {
        type: Sequelize.INTEGER
      },
      groupName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('subscriber_informations');
  }
};