'use strict'
require('dotenv').config();
const mongoose = require('mongoose');

const config = require('./config');

const kickstartApplication = require('./kickstart');

if(config.db.connectionString) {
    mongoose.connect(config.db.connectionString, kickstartApplication());
} else {
    console.log('No connection string provided');
}