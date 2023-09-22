const express = require('express');
const { verifyApiKey } = require('../middlewares/security.middleware');

const routes = express();

routes.use(
  require('./welcome.routes'),
  verifyApiKey,
  require('./test.routes'),
  require('./webhookcreator.routes')
);

module.exports = routes;