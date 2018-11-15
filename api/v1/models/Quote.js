const { got, mashapeKey } = require('../../../config');

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
                "X-Mashape-Key": mashapeKey,
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
            }
        });
        return JSON.parse(gotAnswer.body)[0];
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
                "X-Mashape-Key": mashapeKey,
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
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