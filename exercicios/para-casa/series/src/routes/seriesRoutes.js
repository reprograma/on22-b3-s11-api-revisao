const express = require('express')

const router = express.Router()

const seriesController = require('../controllers/seriesController')

router.get('/all', seriesController.getAllSeries)
router.get('/genre/:genre', seriesController.getByGenre)
router.get('/:id', seriesController.getById)
router.post('/add', seriesController.addNewSeries)
router.delete('/delete/:id', seriesController.deleteById)
router.patch('/liked/:id', seriesController.likedById)



module.exports = router