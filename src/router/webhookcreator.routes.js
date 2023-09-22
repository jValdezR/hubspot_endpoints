const {creatorController, personsController} = require('../controllers/webhookcreator.controller');
const express = require('express');
const {creatorMiddleware} = require('../middlewares/webhookcreator.middleware');

const baseURL = '/webhookcreator/';

const webHookCreatorRouter = express.Router();

webHookCreatorRouter.get(baseURL,personsController);
webHookCreatorRouter.post(baseURL,creatorMiddleware,creatorController);


module.exports = webHookCreatorRouter;