const gamesController = require("../controller/gamesController")
const express = require("express")
const router = express.Router()

router.get("/all",gamesController.getAllGames)
router.get("/:id",gamesController.getGameByID)//getGamesByID
router.post("/add",gamesController.addNewGame)
router.put("/update/:id",gamesController.updateGame)
router.delete("/delete/:id",gamesController.deleteGame)
router.patch("/change/:id",gamesController.changeGame)


module.exports = router