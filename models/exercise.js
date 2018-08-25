'use strict';
module.exports = (sequelize, DataTypes) => {
  var Exercise = sequelize.define('Exercise', {
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    Category: DataTypes.ENUM('Aerobic', 'Anaerobic', 'Flexibility', 'Stability'),
    Weight: DataTypes.BOOLEAN,
    Reps: DataTypes.BOOLEAN,
    Time: DataTypes.BOOLEAN
  }, {});
  Exercise.associate = function(models) {
  };
  return Exercise;
};