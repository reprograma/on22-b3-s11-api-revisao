const seriesController = require('../controller/controller');
const express = require('express');

const router = express.Router();

router.get('/', seriesController.getAllSeries);

router.get('/:id', seriesController.getById);

router.get('/:genero', seriesController.getByGenero);

router.post('/', seriesController.createSerie);

router.delete('/:id', seriesController.deleteSerie);

router.patch('/:id', seriesController.updateSerie);

module.exports = router;