'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_logins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        type: Sequelize.STRING
      },
      MiddleName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      LoginID: {
        type: Sequelize.STRING
      },
      PhoneNo: {
        type: Sequelize.BIGINT
      },
      Location: {
        type: Sequelize.STRING
      },
      Role: {
        type: Sequelize.STRING
      },
      TemPass: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      SecQue1: {
        type: Sequelize.STRING
      },
      SecAns1: {
        type: Sequelize.STRING
      },
      SecQue2: {
        type: Sequelize.STRING
      },
      SecAns2: {
        type: Sequelize.STRING
      },
      SecQue3: {
        type: Sequelize.STRING
      },
      SecAns3: {
        type: Sequelize.STRING
      },
      Status: {
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
    await queryInterface.dropTable('user_logins');
  }
};