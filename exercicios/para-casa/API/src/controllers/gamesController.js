// IMPORTS
const games = require('../models/games.json');

// METHODS

const postGame = (req, res) => {};

const getGameByID = (req, res) => {};

const getAllGames = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: { games },
    });
  } catch {
    res.status(500).json({
      status: 'error',
      message: 'There was an error! :(',
    });
  }
};

const updateGame = (req, res) => {};

const deleteGame = (req, res) => {};

const patchLike = (req, res) => {};

// EXPORTS
module.exports = {
  postGame,
  getGameByID,
  getAllGames,
  updateGame,
  deleteGame,
  patchLike,
};
