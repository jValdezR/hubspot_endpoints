require('dotenv').config();
require('../utils/envChecker.util')

module.exports = {
  server: {
    API_KEY_NAME: process.env.API_KEY_NAME,
    API_KEY_VALUE: process.env.API_KEY_VALUE,
    // limit: process.env.LIMIT,
    SERVER_PORT: process.env.SERVER_PORT,
    // debug: process.env.DEBUG,
    // cors_allowed: process.env.CORS_ALLOWED,
    // timeout: parseInt(process.env.SERVER_TIMEOUT),
  },
};