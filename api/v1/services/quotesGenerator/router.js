const { express } = require('../../../../config');
const { generateQuote } = require('./controller');
const router = express.Router();

router.get('/', generateQuote);

module.exports = router;