const express = require('express');
const { getAllGames, getGame, addGame, editGame, deleteGame, likeGame } = require('../controller/gamesController')
const routerGames = express.Router();

routerGames.get('/showall', getAllGames); //ok

routerGames.post('/newgame', addGame); //ok

routerGames.route('/:id')
    .get(getGame) //ok
    .put(editGame) //ok
    .delete(deleteGame); //ok

routerGames.patch('/:id/like', likeGame); //ok

module.exports = routerGames;