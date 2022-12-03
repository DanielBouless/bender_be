'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
    userId: {
      type: Sequelize.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};