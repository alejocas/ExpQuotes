const {
    databaseHost,
    databaseName,
    databaseUser,
    databasePassword,
    Sequelize
} = require('../../../config');

/**
 * Instance of Sequelize, is needed to connect with the MYSQL database.
 */
const sequelize = new Sequelize(databaseName, databaseUser, databasePassword, {
    host: databaseHost,
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max:5,
        min:0,
        acquire: 25000,
        idle: 10000
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

module.exports = {
    sequelize
}