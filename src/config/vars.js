require('dotenv').config();
require('../utils/envChecker.util')

module.exports = {
  server: {
    API_KEY_NAME: process.env.API_KEY_NAME,
    API_KEY_VALUE: process.env.API_KEY_VALUE,
    SERVER_PORT: process.env.SERVER_PORT,
    SERVER_URL: process.env.SERVER_URL
  },
  api_keys: {
    PIPEDRIVE_API_TOKEN: process.env.PIPEDRIVE_API_TOKEN
  }
};