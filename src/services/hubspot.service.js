const hubspot = require('@hubspot/api-client');
const { HUBSPOT_API_TOKEN } = require('../config/vars').api_keys;

const hubspotClient = new hubspot.Client({ accessToken: HUBSPOT_API_TOKEN })

module.exports = hubspotClient;