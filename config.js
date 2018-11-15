const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const express = require('express');
const got = require('got');
const morgan = require('morgan');

const mashapeKey = "SFtwCM9uebmshQXC1eMMUn4V3E3Dp1z7kJVjsnhNY0KcNkerbA";

module.exports = {
    //Libraries
    bodyParser,
    chalk,
    cors,
    express,
    got,
    morgan,
    //Values
    mashapeKey
}