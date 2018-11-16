const { got, mashapeKey, imageSearchClient } = require('../../../config');
const { QuoteEntity } = require('../database/QuoteEntity');

class Quote {
    constructor() {
        this.category = chooseRandomCategory();
        this.quotesApiPath = `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${this.category}`;
    }

    async generateQuote({ category }) {
        if (typeof category !== 'undefined') {
            this.category = category;
            this.quotesApiPath = `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${this.category}`;
        }
        const specifiedPath = `${this.quotesApiPath}&count=1`;
        const gotAnswer = await got(specifiedPath, {
            method: 'get',
            headers: {
                'X-Mashape-Key': mashapeKey,
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        });
        const generatedQuote = `${JSON.parse(gotAnswer.body)[0].quote} - ${JSON.parse(gotAnswer.body)[0].author}`;
        const images = await imageSearchClient.search(JSON.parse(gotAnswer.body)[0].author, {
            page: 1,
            size: 'medium',
            type: 'face'
        });
        const quoteStructure = {
            quote: generatedQuote,
            image: images[0].url
        };
        const sqlAnwer = QuoteEntity.findOrCreate({
            where: {
                quote: quoteStructure.quote
            },
            defaults: {
                image: quoteStructure.image
            }
        })
        // console.log(`SQL ANSWER: ${sqlAnwer[0]}`);
        return quoteStructure;
    }

    async generateMultipleRandomQuotes({ category, amount }) {
        if (typeof category !== 'undefined') {
            this.category = category;
            this.quotesApiPath = `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${this.category}`;
        }
        amount = typeof amount !== 'undefined' ? amount : 1;
        const specifiedPath = `${this.quotesApiPath}&count=${amount}`;
        const gotAnswer = await got(specifiedPath, {
            method: 'get',
            headers: {
                'X-Mashape-Key': mashapeKey,
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json'
            }
        });
        return JSON.parse(gotAnswer.body);
    }
}

function chooseRandomCategory() {
    if (getRandomInt(0, 1000) % 2 == 0) {
        return "movies";
    }
    return "famous";
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = Quote