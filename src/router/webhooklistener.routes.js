const { listener } = require('../handler/webhooklistener.handler');
const express = require('express');

// Define the base URL for the webhook listener routes
const baseURL = '/webhooklistener/';

// Create an instance of the Express Router to define webhook listener routes
const webHookListenerRouter = express.Router();

// Define a POST route under the base URL and attach the 'listener' handler
webHookListenerRouter.post(baseURL, listener);

// Export the configured Express Router instance for webhook listener routes
module.exports = webHookListenerRouter;
