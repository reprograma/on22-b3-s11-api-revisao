const express = require("express")
const router = express.Router()

const controllerSeries = require('../controller/controllerSeries.js')

router.get('/', controllerSeries.getAllSeries)
router.get('/series/:genero', controllerSeries.getByGender)
router.get('/:id', controllerSeries.getByID)
router.post('/cadastro', controllerSeries.cadastro)
router.delete('/delete/:id', controllerSeries.deleteSerie)
router.patch('/liked/:id', controllerSeries.updateLiked)

module.exports = router