const gamesJason = require("../models/games.json");
// const fs = require("fs");

const getAllGames = (_req, res) => {
  res.status(200).send(gamesJason);
}

const getGamesById = (req, res) => {
  const gamesId = req.params.id;
  const filteredId = gamesJason.filter(game => game.id == gamesId);
  res.status(200).json(filteredId);
}

module.exports = {
	getAllGames,
  getGamesById
}