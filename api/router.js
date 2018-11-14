const { express } = require('../config');
const v1ApiRouter = require('./v1/router');
const router = express.Router();

router.use('/api/v1', v1ApiRouter);

module.exports = router;