const express = require("express");
const router = express.Router();
const gamesController = require("../src/controller/gamesController");

router.get("/", gamesController.getAllGames);

module.exports = router;