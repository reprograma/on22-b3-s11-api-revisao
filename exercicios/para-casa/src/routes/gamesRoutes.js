const gamesController = require("../controllers/gamesController")
const express = require("express")
const router = express.Router()

router.get("/biblioteca", gamesController.getAllGames);
router.get("/game/:id", gamesController.getById);
router.post("/add", gamesController.addGame);
router.put("/update/:id", gamesController.updateById)
router.delete("/delete/:id", gamesController.deleteById)
router.patch("/liked/:id", gamesController.updateLikedGamesById)

module.exports = router