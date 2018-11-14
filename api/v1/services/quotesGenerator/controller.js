const got = require('got');

const generateQuote = async (require, response) => {
    const gotAnswer = await got("https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies&count=10",{
         method: 'post',
         headers: {
            "X-Mashape-Key": "SFtwCM9uebmshQXC1eMMUn4V3E3Dp1z7kJVjsnhNY0KcNkerbA",
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
         }
        })
    console.log(gotAnswer.body)
    response.status(201).send({
        msg: "gotAnswer"
    });
}

module.exports = {
    generateQuote
}