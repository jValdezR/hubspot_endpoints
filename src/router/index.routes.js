const express = require('express');
const { verifyApiKey } = require('../middlewares/security.middleware');

const routes = express();

routes.use(
  require('./welcome.routes'),
  verifyApiKey,
  require('./webhookcreator.routes'),
  require('./webhooklistener.routes')
);

module.exports = routes;