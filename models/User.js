'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,

            allowNull : false,
            primaryKey : true,
        },
        username : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        firstname : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        lastname : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        password : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
    })

    return User;
}