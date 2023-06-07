const gamesController = require("../controller/gamesController")
const express = require("express")
const router = express.Router()

router.get("/allgames", gamesController.getAllGames)
router.get("/games/:id", gamesController.getGameById)
router.post("/newgame", gamesController.addGame)
router.put("/update/:id", gamesController.updateGameById)
router.delete("/delete/:id", gamesController.deleteGame)
router.patch("/liked/:id", gamesController.updateLikeById)

module.exports = router