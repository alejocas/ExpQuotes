const { got, mashapeKey, imageSearchClient } = require('../../../config');

class Quote {

    /**
     * By default, an instance of the class is assigned a random category; 
     * with this you can know what category you can ask the external API.
     */
    constructor() {
        this.category = chooseRandomCategory();
        this.quotesApiPath = `https://andruxnet-random-famous-quotes.p.mashape.com/?cat=${this.category}`;
    }

    /**
     * This function requests a random quote the API, you can send a JSON with a "category" key 
     * defined between the "famous | movies" to receive a quote from that specific category.
     * @param {*} category
     */
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
        return quoteStructure;
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