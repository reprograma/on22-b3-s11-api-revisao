// IMPORTS
const games = require('../models/games.json');
const path = require('path');
const fs = require('fs');

// CONFIG
const gamesFilePath = '../models/games.json';

const errorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    status: 'error',
    message: message,
  });
};

// POST  ////////////////////////////////////////////////////////////////
const postGame = (req, res) => {
  try {
    const newId = games[games.length - 1].id + 1;
    const newGame = Object.assign({id: newId}, req.body);

    games.push(newGame);
    fs.writeFile(gamesFilePath, JSON.stringify(games), () => {
      res.status(201).json({
        status: 'success',
        data: {games},
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// GET  ////////////////////////////////////////////////////////////////
const getAllGames = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {games},
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// GET  ////////////////////////////////////////////////////////////////
const getGameByID = (req, res) => {
  try {
    const idRequest = req.params.id;
    const gameData = games.find((game) => game.id == idRequest);

    if (!gameData) {
      return errorResponse(res, 404, 'Game not found');
    }

    res.status(200).json({
      status: 'success',
      data: {gameData},
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// GET  ////////////////////////////////////////////////////////////////
const getGameByConsole = (req, res) => {
  try {
    const consoleRequest = req.query.console.toLowerCase();

    const filteredGames = games.filter((game) =>
      game.consoles
        .map((console) => console.toLowerCase())
        .includes(consoleRequest),
    );

    res.status(200).json({
      status: 'success',
      data: {games: filteredGames},
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// PUT  ////////////////////////////////////////////////////////////////
const updateGame = (req, res) => {
  try {
    const idRequest = req.params.id;
    const gameRequest = req.body;

    const indexToUpdate = games.findIndex((game) => game.id == idRequest);

    if (indexToUpdate == -1) {
      return errorResponse(res, 404, 'Game not found');
    }

    games[indexToUpdate] = {
      ...games[indexToUpdate],
      ...gameRequest,
    };

    fs.writeFile(gamesFilePath, JSON.stringify(games), () => {
      res.status(200).json({
        status: 'success',
        message: 'Game updated successfully',
        data: {game: games[indexToUpdate]},
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// PATCH  ////////////////////////////////////////////////////////////////
const patchLike = (req, res) => {
  try {
    const idRequest = req.params.id;
    const {liked} = req.body;

    const indexToUpdate = games.findIndex((game) => game.id == idRequest);

    if (indexToUpdate == -1) {
      return errorResponse(res, 404, 'Game not found');
    }

    games[indexToUpdate].liked = liked;

    fs.writeFile(gamesFilePath, JSON.stringify(games), () => {
      res.status(200).json({
        status: 'success',
        message: 'Updated successfully',
        data: {game: games[indexToUpdate]},
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// DELETE  ////////////////////////////////////////////////////////////////
const deleteGame = (req, res) => {
  try {
    const idRequest = req.params.id;

    const indexToDelete = games.findIndex((game) => game.id == idRequest);

    if (indexToDelete == -1) {
      return errorResponse(res, 404, 'Game not found');
    }

    const deletedGame = games.splice(indexToDelete, 1);

    fs.writeFile(gamesFilePath, JSON.stringify(games), () => {
      res.status(200).json({
        status: 'success',
        message: 'Game deleted successfully',
        data: {game: deletedGame},
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// EXPORTS
module.exports = {
  postGame,
  getAllGames,
  getGameByID,
  getGameByConsole,
  updateGame,
  deleteGame,
  patchLike,
};
