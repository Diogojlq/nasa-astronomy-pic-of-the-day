const express = require('express');

const apiRouter = express.Router();

const getPictureUrl = require('./controller')

apiRouter.get("/", getPictureUrl);


module.exports = apiRouter;