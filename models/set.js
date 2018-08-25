'use strict';
module.exports = (sequelize, DataTypes) => {
  var Set = sequelize.define('Set', {
    Weight: DataTypes.INTEGER,
    Reps: DataTypes.INTEGER,
    Time: DataTypes.INTEGER,
  }, {});
  Set.associate = function(models) {
    Set.belongsTo(models.Workout);
    Set.belongsTo(models.Exercise);
  };
  return Set;
};