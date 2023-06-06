// IMPORTS
const express = require('express');
const gamesRouter = require('../src/routes/gamesRoutes');
const seriesRouter = require('../src/routes/seriesRoutes');

// APP CONFIG
const app = express();
app
  .use(express.json())
  .use('/api', gamesRouter)
  .use('/api', seriesRouter);

// EXPORTS
module.exports = app;