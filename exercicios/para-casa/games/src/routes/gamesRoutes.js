const gamesController = require("../controller/gamesController")
const express = require("express")
const router = express.Router()

router.get("/list", gamesController.getAllGames);
router.get("/get/:id", gamesController.getGameById);
router.post("/add", gamesController.addGame);
router.put("/upd/:id", gamesController.updateGame);
router.patch("/change/:id", gamesController.attGame);
router.delete("/delete/:id", gamesController.deleteGame);

module.exports = router