const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');

const routes = require('../router/index.routes');

const { limit, cors_allowed, debug} = require('./vars').server;


const app = express();
app.use(express.json({ limit }));
app.use(express.urlencoded({ limit, extended: true }));
if (debug === 'true') app.use(morgan('common'));
app.use(helmet());
app.use(cors({ origin: cors_allowed }));
app.use('/', routes);

module.exports = app;