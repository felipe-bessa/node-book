'use strict'

const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/products', (req, res) => {
    res.send([{
        name: 'Default product',
        description: 'product description',
        price: 100
    }]).sendStatus(200);
});

module.exports = app;