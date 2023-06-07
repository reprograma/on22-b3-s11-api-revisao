const seriesController = require('../controllers/seriesController')
const express = require('express')
const router = express.Router()

router.get('/', seriesController.getAll)
router.get('/genre', seriesController.getByGenre)
router.get('/:id', seriesController.getById)
router.post('/', seriesController.postNewSerie)
router.delete('/:id', seriesController.deleteSerieById)
router.patch('/:id/liked', seriesController.updateLikedById)


module.exports = router