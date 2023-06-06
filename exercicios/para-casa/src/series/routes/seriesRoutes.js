const express = require('express');
const { getAllSeries, getSerieByID, likeSerie, deleteSerieByID, addSerie, getSeriesByGenre } = require('../controller/seriesController');

const routerSeries = express.Router();

routerSeries.get('/all', getAllSeries);
routerSeries.get('/genero', getSeriesByGenre);
routerSeries.get('/:id', getSerieByID);

routerSeries.patch('/like', likeSerie);

routerSeries.post('/newserie', addSerie);
routerSeries.delete('/:id', deleteSerieByID);


module.exports = routerSeries;