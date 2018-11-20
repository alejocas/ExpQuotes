const { bodyParser, chalk, cors, express, morgan, morganMode, port } = require('./config');
const apiRouter = require('./api/router');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //Allow only Strings and Arrays
app.use(bodyParser.json());
app.use(cors());
app.use(morgan(morganMode));
app.use(apiRouter);

app.listen(port, () => {
    console.log(`${chalk.blue('Quotes experiment running on port ')}${chalk.yellow.bold(`${port}`)}`);
});