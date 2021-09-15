'use strict'
require('dotenv').config();

const config = require('./config');

const app = require ('./app.js');

//const port = 31912;

app.listen(config.app.port, (err) => {
    if (err) return console.error('erro');

    console.log(`Running at: http://localhost:${config.app.port}/`);
});