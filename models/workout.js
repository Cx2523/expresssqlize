'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workout = sequelize.define('Workout', {
    Name: DataTypes.STRING,
    Description: DataTypes.TEXT,
    StartTime: DataTypes.DATE,
    EndTime: DataTypes.DATE
  }, {});
  Workout.associate = function(models) {
    // associations can be defined here
    Workout.hasMany(models.Set);
  };
  return Workout;
};