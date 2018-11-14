const { express } = require('../../config');
const servicesPath = './services/';
const quotesGeneratorRouter = require(`${servicesPath}quotesGenerator/router`);
const router = express.Router();

router.use('/generate-changing-life-quote', quotesGeneratorRouter);

module.exports = router;