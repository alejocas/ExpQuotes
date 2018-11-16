const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const express = require('express');
const got = require('got');
const morgan = require('morgan');
const Sequelize = require('sequelize');

const databaseHost = "localhost";
const databaseName = "ChangingLifeDB";
const databaseUser = "userMentality";
const databasePassword = "T3CH-T3ST#3xp3r1m3nt4l1ty";
const mashapeKey = "SFtwCM9uebmshQXC1eMMUn4V3E3Dp1z7kJVjsnhNY0KcNkerbA";

module.exports = {
    //Libraries
    bodyParser,
    chalk,
    cors,
    express,
    got,
    morgan,
    Sequelize,
    //Values
    mashapeKey,
    databaseHost,
    databaseName,
    databasePassword,
    databaseUser
}