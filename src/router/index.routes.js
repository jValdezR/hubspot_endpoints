const express = require('express');

const routes = express();

routes.use(
  require('./welcome.routes'),
  require('./webhooklistener.routes')
  
);

module.exports = routes;