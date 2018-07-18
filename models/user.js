'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    Username: DataTypes.STRING,
    Password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Exercise);
    User.hasMany(models.Workout);
  };
  return User;
};