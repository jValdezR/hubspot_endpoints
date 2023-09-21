require('dotenv').config();
require('../utils/envChecker.util')

module.exports = {
  server: {
    API_KEY_NAME: process.env.API_KEY_NAME,
    API_KEY_VALUE: process.env.API_KEY_VALUE,
    SERVER_PORT: process.env.SERVER_PORT,
  },
};