'use strict'

import app from './app.js';

const port = 31912;

app.listen(port, (err) => {
    if (err) return console.error('erro');

    console.log(`Running at: http://localhost:${port}/`);
});