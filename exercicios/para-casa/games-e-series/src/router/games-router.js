const express = require('express')
const router = express.Router()

const gamesController = require('../controller/games-controller')

router.get('/', gamesController.getAllGames)
router.get('/:id', gamesController.getGameById)
router.post('/add-game', gamesController.addGame)
router.put('/update/:id', gamesController.updateGame)
router.delete('/delete/:id', gamesController.deleteGame)
router.patch('/liked/:id', gamesController.updateLikedGame)


module.exports = router