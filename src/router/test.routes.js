const {testGet, testPost} = require('../controllers/test.controller');
const express = require('express');
const {verifyPost} = require('../middlewares/test.middleware');

const baseURL = '/test/';

const testRouter = express.Router();

testRouter.get(baseURL,testGet);
testRouter.post(baseURL,verifyPost,testPost);


module.exports = testRouter;