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

const updatePut = (req, res) => {
  const id = req.params.id;
  let gameRequest = req.body;
  let findGame = gamesJson.findIndex(game => game.id == id);
  gamesJson.splice(findGame, 1, gameRequest);
  res.status(200).json([{
    "message": "Successfully updated game.", gamesJson
  }]);
}

// const updatePatchLiked = (req, res) => {
//   const id = req.params.id;
//   let newLiked = req.body.liked;
//   let findLiked = gamesJson.find(game => game.id == id);

//   findLiked.liked = newLiked;
//   res.status(200).json([{
//     "message": "Successfully updated liked.", findLiked
//   }]);
// }

const deleteGameById = (req, res) => {
  const id = req.params.id;
  const deleteGame = gamesJson.findIndex(game => game.id == id);
  gamesJson.splice(deleteGame, 1);
  res.status(200).json([{
    "message": "Deleted game",
    "Deleted": id,
    gamesJson
  }]);
}

module.exports = {
	getAllGames,
  getGamesById,
  registerGame,
  updatePut,
  // updatePatchLiked
  deleteGameById
}