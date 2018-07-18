'use strict';
module.exports = (sequelize, DataTypes) => {
  var Exercise = sequelize.define('Exercise', {
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Category: DataTypes.ENUM('Aerobic', 'Anaerobic', 'Flexibility', 'Stability'),
    Metric1: DataTypes.ENUM('Weight', 'Reps', 'Time'),
    Metric2: DataTypes.ENUM('Weight', 'Reps', 'Time')
  }, {});
  Exercise.associate = function(models) {
    // associations can be defined here
    Exercise.belongsToMany(models.Workout, {through: 'WorkoutExercises'});
  };
  return Exercise;
};