const controller = require("../controller/gamesController")
const express = require("express")
const router = express.Router


router.get("/games", controller.getAllGames)
router.get("/game/:id", controller.getGameById)
router.post("/register", controller.registerNewGame)
router.put("/update/:id", controller.updateGameById)
router.delete("/delete/:id", controller.deleteGameById)
//router.patch


module.exports = router