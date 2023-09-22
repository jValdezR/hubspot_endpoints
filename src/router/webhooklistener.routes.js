const {listener} = require('../handler/webhooklistener.handler');
const express = require('express');

const baseURL = '/webhooklistener/';

const webHookListenerRouter = express.Router();


webHookListenerRouter.post(baseURL,listener);


module.exports = webHookListenerRouter;