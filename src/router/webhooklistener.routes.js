const {listener} = require('../controllers/webhooklistener.controller');
const express = require('express');

const baseURL = '/webhooklistener/';

const webHookCreatorRouter = express.Router();

webHookCreatorRouter.post(baseURL,listener);


module.exports = webHookCreatorRouter;