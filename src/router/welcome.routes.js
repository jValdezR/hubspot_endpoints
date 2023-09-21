const express = require('express');

const baseURL = '/';

const testRouter = express.Router();

testRouter.get(baseURL,(req, res) => {
    res.send('Welcome to hubspot backend');
});


module.exports = testRouter;