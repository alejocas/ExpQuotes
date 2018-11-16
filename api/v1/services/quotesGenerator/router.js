const { express } = require('../../../../config');
const { deleteQuote, generateQuote } = require('./controller');
const router = express.Router();

router.get('/', generateQuote);
router.delete('/:id',deleteQuote);

module.exports = router;