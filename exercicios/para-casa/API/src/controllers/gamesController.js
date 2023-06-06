// IMPORTS
const games = require('../models/games.json');
const fs = require('fs');

// METHODS

const postGame = (req, res) => {
  try {
    const newId = games[games.length - 1].id + 1;
    const newGame = Object.assign({ id: newId }, req.body);

    games.push(newGame);
    fs.writeFile('../models/games.json', JSON.stringify(games));
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `There was an error: ${err}`,
    });
  }
};

const getGameByID = (req, res) => {
  try {
    const idRequest = req.params.id;
    const gameData = games.find((game) => game.id === idRequest);

    res.status(200).json({
      status: 'success',
      data: { gameData },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `There was an error: ${err}`,
    });
  }
};

const getAllGames = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: { games },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: `There was an error:${err}`,
    });
  }
};

const updateGame = (req, res) => {
  const idRequest = req.params.id;
  const gameRequest = req.body;

  const updateIndex = games.findIndex((game) => game.id === idRequest);
  if (updateIndex === -1) {
    return res
      .status(404)
      .json({
        status: 'error',
        message: 'Game not found'
      });
  }

  games[updateIndex] = {
    ...games[updateIndex],
    ...gameRequest,
  };

  fs.writeFile(
    '../models/games.json',
    JSON.stringify(games),
    (err) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: `There was an error: ${err}`,
        });
      }

      res.status(200).json({
        status: 'success',
        message: 'Game updated successfully',
        data: games[updateIndex],
      });
    }
  );
};

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
