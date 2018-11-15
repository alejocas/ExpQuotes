const Quote = require('../../models/Quote');

async function generateQuote(require, response) {
    const quote = new Quote();
    const answerit = await quote.generateQuote(require.query);
    response.status(201).send(answerit);
}

module.exports = {
    generateQuote
}