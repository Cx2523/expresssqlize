'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reps: {
        type: Sequelize.INTEGER
      },
      Weight: {
        type: Sequelize.INTEGER
      },
      Time: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      WorkoutId: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Workouts', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      ExerciseId: {
        allowNull: false,
        autoIncrement: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Exercises', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sets');
  }
};