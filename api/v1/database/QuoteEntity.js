const { Sequelize } = require('../../../config');
const { sequelize } = require('./connection');

const QuoteEntity = sequelize.define('quote', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    //Defining model
});