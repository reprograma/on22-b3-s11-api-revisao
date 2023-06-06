const express = require('express');
const { getAllGames, getGame, addGame, editGame, deleteGame, likeGame } = require('../controller/gamesController')
const routerGames = express.Router();

routerGames.get('/showall', getAllGames); //ok

routerGames.get('/:id', getGame); //ok

routerGames.post('/newgame', addGame); //ok

routerGames.put('/:id', editGame); //ok

routerGames.delete('/:id', deleteGame); //ok

routerGames.patch('/:id/like', likeGame); //ok

module.exports = routerGames;