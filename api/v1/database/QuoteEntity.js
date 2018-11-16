const { Sequelize } = require('../../../config');
const { sequelize } = require('./connection');

const QuoteEntity = sequelize.define('quote', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    quote: {
        type: Sequelize.STRING(800),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    image : {
        type: Sequelize.STRING(400),
        allowNull: false,
        validate: {
            isUrl: true,
            notEmpty: true
        }
    }
}, {
    tableName: 'quote'
});

module.exports = {
    QuoteEntity
}