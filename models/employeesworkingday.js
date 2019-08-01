'use strict';
module.exports = (sequelize, DataTypes) => {
  const EmployeesWorkingDay = sequelize.define('EmployeesWorkingDay', {
    employeeId: DataTypes.INTEGER,
    workingDayId: DataTypes.INTEGER
  }, {});
  EmployeesWorkingDay.associate = function(models) {
    // associations can be defined here
    EmployeesWorkingDay.belongsTo(models.Employee, {foreignKey: 'employeeId'})
    EmployeesWorkingDay.belongsTo(models.WorkingDay, {foreignKey: 'workingDayId'})
  };
  return EmployeesWorkingDay;
};