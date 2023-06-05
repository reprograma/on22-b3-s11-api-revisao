const gamesJason = require("../models/games.json");
const fs = require("fs");

const getAllGames = (_req, res) => {
  res.status(200).send(gamesJason);
}

module.exports = {
	getAllGames
}