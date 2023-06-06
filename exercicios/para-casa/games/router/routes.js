const express = require("express");
const router = express.Router();
const gamesController = require("../src/controller/gamesController");

router.get("/", gamesController.getAllGames);
router.get("/games/:id", gamesController.getGamesById);
router.post("/games", gamesController.registerGame);
router.put("/games/games/:id", gamesController.updatePut);
// router.patch("/liked/:id", gamesController.updatePatchLiked);
router.delete("/delete/:id", gamesController.deleteGameById);
module.exports = router;