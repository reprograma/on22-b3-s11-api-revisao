const gamesControllers = require("../Controllers/gamesControllers") //importa o controller
const express = require("express")
const router = express.Router()


router.get = ("/all", gamesControllers.getAllGames);
router.get = ("/:id", gamesControllers.getGamesId);
router.post = ("/add", gamesControllers.addNewGame);
router.put = ("/update/:id", gamesControllers.updateGame);
router.patch = ("/liked/:id", gamesControllers.likedGame);
router.delete = ("/delete/:id", gamesControllers.deleteGame);


module.exports = router



