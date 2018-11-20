const Quote = require('../../models/Quote');
const { QuoteEntity } = require('../../database/QuoteEntity');

/**
 * @api {get} /api/v1/generate-changing-life-quote
 * @apiVersion 1.0.0
 * @apiName getRandomQuote
 * @apiGroup Quotes
 * 
 * @apiDescription You can request a random quote.
 * 
 * @apiParam {String} category Category can be "famous" or "movies"
 * 
 * @apiSuccess {Number} id Identificator of the quote in database
 * @apiSuccess {String} quote Random quote with his/her author.
 * @apiSuccess {String} image URL to a image related to the quote.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 201 CREATED (or HTTP/1.1 200 OK)
 *      {
 *          "id":12,
 *          "quote": "I'm king of the world! - Titanic",
 *          "image": "https://i.ytimg.com/vi/FSGeskFzE0s/maxresdefault.jpg"
 *      }
 * 
 * @apiError error The quote can't be generated due a database problem or an unexisting image related to.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 403 Forbidden
 *      {
 *          "error": "Here is the error"
 *      }
 */
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
    .spread((quoteStructure,created) => {
        created ? response.status(201).send(quoteStructure) : response.status(200).send(quoteStructure); 
    })
    .catch((error) =>{
        response.status(403).send({
            errorMsg: error
        });
    })
}

/**
 * @api {delete} /api/v1/generate-changing-life-quote/:id
 * @apiVersion 1.0.0
 * @apiName deleteRandomQuote
 * @apiGroup Quotes
 * 
 * @apiDescription You can delete a selected quote with the id.
 * 
 * @apiParam {Number} id Identifier of the quote that will be deleted
 * 
 * @apiSuccess {String} msg Message that says if the quote was deleted or was not found in the database (in the second case, probably, the quote was previously deleted).
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK 
 *      {
 *          "msg": "Quote identified by 42 was deleted"
 *      }
 * 
 * @apiError error The quote can't be deleted or the server can't resolve that.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 BadRequest
 *      {
 *          "error": "Here is the error"
 *      }
 */
async function deleteQuote (request, response) {
    const quoteId = request.params.id;
    QuoteEntity.destroy({
        where: {
            id: quoteId
        }
    })
    .then((itWasDeleted) => {
        let message = `Quote identified with id:${quoteId} `;
        message += itWasDeleted ? 'was deleted': 'cannot be finded, review the id and try again.';
        response.status(200).send({
            msg: message
        })
    })
    .catch((error) => {
        response.status(400).send({
            errorMsg: error
        });
    })
}

/**
 * @api {get} /api/v1/generate-changing-life-quote/:id
 * @apiVersion 1.0.0
 * @apiName searchRandomQuoteGeneratedBefore
 * @apiGroup Quotes
 * 
 * @apiDescription You can search a quote with the id, ret.
 * 
 * @apiParam {Number} id Identifier of the quote that will be searched
 * 
 * @apiSuccess {Number} id Identifier of the quote searched.
 * @apiSuccess {String} quote Quote and his/her author.
 * @apiSuccess {String} image URL to an image related to the Quote.
 * 
 * @apiSuccessExample Success-Response:
 *      HTTP/1.1 200 OK 
 *      {
 *          "id": 42,
 *          "quote": "I'm king of the world! - Titanic",
 *          "image":"https://i.ytimg.com/vi/FSGeskFzE0s/maxresdefault.jpg"
 *      }
 * 
 * @apiError error The quote can't be deleted or the server can't resolve that.
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1 400 BadRequest
 *      {
 *          "error": "Quote identified by: 42 doesn't exists, sorry :c"
 *      }
 */
async function searchQuote (request, response) {
    const quoteId = request.params.id;
    QuoteEntity.findByPk(Number(quoteId))
    .then((quote) => {
        response.status(200).send(quote.dataValues);
    })
    .catch((error) => {
        console.log(error);
        response.status(200).send({error: `Quote identified by: ${quoteId} doesn't exists, sorry :c`});
    })
}

module.exports = {
    deleteQuote,
    generateQuote,
    searchQuote
}