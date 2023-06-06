const express = require("express");
const router = express.Router();
const gamesController = require("../src/controller/gamesController");

router.get("/", gamesController.getAllGames);
router.get("/games/:id", gamesController.getGamesById);

module.exports = router;