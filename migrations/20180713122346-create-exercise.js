'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Exercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.TEXT
      },
      Category: {
        type: Sequelize.ENUM('Aerobic', 'Anaerobic', 'Flexibility', 'Stability')
      },
      Weight: {
        type: Sequelize.BOOLEAN
      },
      Reps: {
        type: Sequelize.BOOLEAN
      },
      Time: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Exercises');
  }
};