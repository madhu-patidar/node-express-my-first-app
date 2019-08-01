'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    firstName:{
            type : DataTypes.STRING,
            allowNull : true,
        },
    lastName:{
            type : DataTypes.STRING,
            allowNull : true,
        },
    email:{
            type : DataTypes.STRING,
            allowNull : true,
        },
    gender:{
            type : DataTypes.STRING,
            allowNull : true,
        },
    ip_address:{
            type : DataTypes.STRING,
            allowNull : true,
        },
    salary: {
      type : DataTypes.NUMBER,
      allowNull : true,
  },
    data_of_joining: {
      type : DataTypes.DATE,
      allowNull : true,
  },
    contact_number: {
      type : DataTypes.NUMBER,
      allowNull : true,
  },
    profile:{
            type : DataTypes.STRING,
            allowNull : true,
        },
    department:{
            type : DataTypes.STRING,
            allowNull : true,
        }
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
    Employee.belongsToMany(models.WorkingDay, {through: 'EmployeesWorkingDays', foreignKey: 'EmployeeId', as: 'days'})
  };
  return Employee;
};