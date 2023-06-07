const gamesController = require ("../Controller/gamesController")
const express = require ("express")
const router = express.Router()

router.get("/", gamesController.getAllGames)
router.get("/:id", gamesController.getGames)
router.post("/add", gamesController.addGames)
router.put("/update/:id", gamesController.updateGames)
router.delete("/:id", gamesController.deleteGames)
router.patch("/liked/:id", gamesController.updateGamesLiked)

module.exports = router