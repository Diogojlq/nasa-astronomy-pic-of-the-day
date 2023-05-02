const express = require('express');

const apiRouter = require('./router')  

const app = express();
app.engine('pug', require('pug').__express)
app.set('view engine','pug');

app.use('/', apiRouter)

module.exports = app;