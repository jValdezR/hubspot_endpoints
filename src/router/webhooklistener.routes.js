const {listener} = require('../controllers/webhooklistener.controller');
const express = require('express');

const baseURL = '/webhooklistener/';

const webHookListenerRouter = express.Router();


webHookListenerRouter.post(baseURL,listener);


module.exports = webHookListenerRouter;