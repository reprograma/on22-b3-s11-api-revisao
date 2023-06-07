const express = require('express');
const { getAllSeries, getSerieByID, likeSerie, deleteSerieByID, addSerie, getSeriesByGenre } = require('../controller/seriesController');

const routerSeries = express.Router();

routerSeries.get('/all', getAllSeries); //ok
routerSeries.get('/genero', getSeriesByGenre); //ok
routerSeries.get('/:id', getSerieByID); //ok

routerSeries.patch('/:id/like', likeSerie); //ok

routerSeries.post('/newserie', addSerie); //ok
routerSeries.delete('/:id', deleteSerieByID); //ok


module.exports = routerSeries;