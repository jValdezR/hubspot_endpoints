const {creatorController, personsController, webHooks} = require('../controllers/webhookcreator.controller');
const express = require('express');
const {creatorMiddleware} = require('../middlewares/webhookcreator.middleware');

const baseURL = '/webhookcreator/';

const webHookCreatorRouter = express.Router();

// webHookCreatorRouter.get(baseURL,personsController);
webHookCreatorRouter.get(baseURL,webHooks);
webHookCreatorRouter.post(baseURL,creatorMiddleware,creatorController);


module.exports = webHookCreatorRouter;