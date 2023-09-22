require('dotenv').config();

module.exports = {
  server: {
    SERVER_PORT: process.env.SERVER_PORT,
  },
  api_keys: {
    PIPEDRIVE_API_TOKEN: process.env.PIPEDRIVE_API_TOKEN,
    HUBSPOT_API_TOKEN: process.env.HUBSPOT_API_TOKEN
  }
};