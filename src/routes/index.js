'use strict'

const express = require('express');
const productsRoute = require('./products');

const router = express.Router();

router.use('/products', productsRoute);

router.get('/', (req, res) => res.send('Hello World!'));

module.exports = router;