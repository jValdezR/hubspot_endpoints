// Use of HubSpot API
const hubspot = require('@hubspot/api-client');

// Import of enviroment variable for HubSpot authentication
const { HUBSPOT_API_TOKEN } = require('../config/vars').api_keys;

// Create a HubSpot client instance with the provided API token
const hubspotClient = new hubspot.Client({ accessToken: HUBSPOT_API_TOKEN });

// Export the configured HubSpot client for API interaction
module.exports = hubspotClient;
