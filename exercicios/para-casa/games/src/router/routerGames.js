const gamesController = require('../conntroller/gamesController')
const express = require('express')
const router = express.Router()

router.get('/', gamesController.getAll)
router.get('/games/:id', gamesController.gamesById)
router.post('/gamesAdd', gamesController.addPost)
router.put('/update/:id', gamesController.updateById)
router.delete('/delete/:id', gamesController.deleteById)
router.patch('/liked/:id', gamesController.updateFav)

module.exports = router