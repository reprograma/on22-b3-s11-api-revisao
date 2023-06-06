const gamesJson = require("../models/games.json");
// const fs = require("fs");

const getAllGames = (_req, res) => {
  res.status(200).send(gamesJson);
}

const getGamesById = (req, res) => {
  const gamesId = req.params.id;
  const filteredId = gamesJson.filter(game => game.id == gamesId);
  res.status(200).json(filteredId);
}

const registerGame = (req, res) => {
  let newTitle = req.body.title;
  let newLaunchYear = req.body.launchYear;
  let newConsoles = req.body.consoles;
  let newLiked = req.body.liked;

  const newGame = {
    id:(gamesJson.length) + 1,
    title: newTitle,
    launchYear: newLaunchYear,
    consoles: newConsoles,
    liked: newLiked
  }

  gamesJson.push(newGame);
  res.status(201).json([{
    "Message": "Successfully registered game.", newGame
  }]);
}



module.exports = {
	getAllGames,
  getGamesById,
  registerGame
}