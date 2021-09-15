'use strict'

require('dotenv').config();

const config = require('./config');

const app = require ('./app.js');

module.exports = (err) => {
    if(err) return console.log('Erro ao conectar no banco de dados');

    app.listen(config.app.port, (err) => {
        if (err) return console.error('erro');
        
        console.log(`Running at: http://localhost:${config.app.port}/`);
    });
};