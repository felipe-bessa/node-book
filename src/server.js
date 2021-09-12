'use strict'

const express = require('express');
const app = express();
const port = 31912;

app.get('/', (req, res) => res.send('hello, world!'));

app.listen(port, (err) => {
    if (err) return console.error('erro');

    console.log(`Running at: http://localhost:${port}/`);
});