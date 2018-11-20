const { express } = require('../../../../config');
const { deleteQuote, generateQuote, searchQuote } = require('./controller');
const router = express.Router();

router.get('/', generateQuote);
router.delete('/:id', deleteQuote);
router.get('/:id', searchQuote);


module.exports = router;