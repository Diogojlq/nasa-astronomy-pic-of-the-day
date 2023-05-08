const express = require('express');
const path = require('path');

const apiRouter = require('./router');  
const cors = require('cors');

const app = express();

app.use(cors({
    origin:'http://localhost:3000'
}))

app.use(express.json());
app.set('views', path.join(__dirname, 'views'));

app.use('/', apiRouter)

module.exports = app;