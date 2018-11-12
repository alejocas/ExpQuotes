const { bodyParser, chalk, cors, express, morgan } = require('./config');

const app = express();
const port = 49153;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log(`${chalk.blue('Quotes experiment running on port ')}${chalk.yellow.bold(`${port}`)}`);
});