const express = require('express');
const { verifyApiKey } = require('../middlewares/security.middleware');

const routes = express();

routes.use(
  require('./welcome.routes'),
  require('./webhooklistener.routes'),
  // verifyApiKey,
  // require('./webhookcreator.routes'),
  
);

module.exports = routes;