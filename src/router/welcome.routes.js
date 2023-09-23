const express = require('express');

// Define the base URL for the test route
const baseURL = '/';

// Create an instance of the Express Router to define the test route
const testRouter = express.Router();

// Define a GET route at the base URL to welcome users
testRouter.get(baseURL, (req, res) => {
    res.send('Welcome to the HubSpot backend');
});

// Export the configured Express Router instance for the test route
module.exports = testRouter;
