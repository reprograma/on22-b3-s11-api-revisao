const express = require('express')
const router = express.Router()

const seriesController = require('../controller/series-controller')

     router.get('/', seriesController.getAllSeries)
     router.get('/genero', seriesController.getSerieByGenre)
     router.get('/:id', seriesController.getSerieById)
     router.post('/add-serie', seriesController.addSerie)
     router.delete('/delete/:id', seriesController.deleteSerie)
     router.patch('/liked/:id', seriesController.updateLikedSerie)


module.exports = router