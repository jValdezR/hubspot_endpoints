// Import the 'dotenv' package to load environment variables from a .env file
require('dotenv').config();

// Export configuration objects containing environment variables
module.exports = {
  // Configuration for the server
  server: {
    // Environment variable for defining the server port
    SERVER_PORT: process.env.SERVER_PORT,
  },
  // Configuration for API keys
  api_keys: {
    // Environment variable for storing the HubSpot API token
    HUBSPOT_API_TOKEN: process.env.HUBSPOT_API_TOKEN
  }
};
