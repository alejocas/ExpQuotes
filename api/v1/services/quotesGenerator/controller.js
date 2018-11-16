const Quote = require('../../models/Quote');
const { QuoteEntity } = require('../../database/QuoteEntity');

async function generateQuote(require, response) {
    const quote = new Quote();
    const generatedQuoteStructure = await quote.generateQuote(require.query);
    QuoteEntity.findOrCreate({
        where: {
            quote: generatedQuoteStructure.quote
        },
        defaults: {
            image: generatedQuoteStructure.image
        }
    })
    .spread((quoteStructure, created) => {
        response.status(201).send(quoteStructure); 
    });
}

module.exports = {
    generateQuote
}