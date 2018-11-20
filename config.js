const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const express = require('express');
const got = require('got');
const imageSearch = require('image-search-google');
const morgan = require('morgan');
const Sequelize = require('sequelize');

const databaseHost = 'localhost';
const databaseName = 'ChangingLifeDB';
const databaseUser = 'userMentality';
const databasePassword = 'T3CH-T3ST#3xp3r1m3nt4l1ty';
const googleCseIdentifier = '014527640621384399952:aesqve1mayu';
const googleCseApiKey = 'AIzaSyDwBgLqO9AkTOlFN-y0-wJ_PhPkzr0f44U';
const mashapeKey = 'SFtwCM9uebmshQXC1eMMUn4V3E3Dp1z7kJVjsnhNY0KcNkerbA';
const morganMode = 'tiny';
const port = 49153;

const imageSearchClient = new imageSearch(googleCseIdentifier, googleCseApiKey);

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
    databaseHost,
    databaseName,
    databasePassword,
    databaseUser,
    imageSearchClient,
    mashapeKey,
    morganMode,
    port
}