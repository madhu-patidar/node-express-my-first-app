'use strict'

const columnAndTypes = [{
    name : 'companyId',
    type : (Sequelize) => {
        return {
            type : Sequelize.INTEGER,
            allowNull: true,
            defaultValue : null
        }
    }
}];

module.exports = {
    up : (queryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                return queryInterface.addColumn(
                    'Employees',
                    c.name,
                    c.type(Sequelize)
                )
               
            })
        )
    },

    down :  (queryInterface, Sequelize) => {
        return Promise.all(
            columnAndTypes.map(c => {
                return queryInterface.removeColumn(
                    'employees',
                )
            })
        )
    }
} 