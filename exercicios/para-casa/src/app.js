 const express = require('express');
 const seriesRouter = require('./router/router');

const app = express();
app.use(express.json());

app.use('/series', seriesRouter);

module.exports = app;