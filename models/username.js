'use strict';
module.exports = (sequelize, DataTypes) => {
  const userName = sequelize.define('userName', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  userName.associate = function(models) {
    // associations can be defined here
  };
  return userName;
};