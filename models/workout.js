'use strict';
module.exports = (sequelize, DataTypes) => {
  var Workout = sequelize.define('Workout', {
    Starttime: DataTypes.DATE,
    Endtime: DataTypes.DATE,
    Metric1: DataTypes.INTEGER,
    Metric2: DataTypes.INTEGER
  }, {});
  Workout.associate = function(models) {
    // associations can be defined here
    Workout.hasMany(models.Exercise);
  };
  return Workout;
};