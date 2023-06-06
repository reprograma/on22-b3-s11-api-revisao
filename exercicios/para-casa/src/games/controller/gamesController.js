const gamesJson = require('../models/games.json');
const fs = require('fs');

const getAllGames = (req, res) => {
    try {
        res.status(200).json(gamesJson);
    } catch (error) {
        res.status(500).send("Houve interno em sua requisição.")
    }
}

const getGame = (req, res) => {
    try {
        const reqID = req.params.id;
        const gameFind = gamesJson.find(game => game.id == reqID);

        if (gameFind === undefined) {
            res.status(404).send("Jogo não encontrado!");
        } else {
            res.status(200).json(gameFind);
        }
    } catch (error) {
        res.status(500).send("Houve interno em sua requisição.");
    }
};

const addGame = (req, res) => {
    const newGame = {
        id: Math.floor(Date.now() * Math.random()).toString(34),
        title: req.body.title,
        launchYear: req.body.launchYear.toString(),
        consoles: req.body.consoles,
        liked: false
    }
    if (gamesJson.push(newGame)) {
        res.status(201).json([{
            message: "Jogo adicionado com sucesso!", newGame
        }])
    }
};

const editGame = (req, res) => {
    const reqID = req.params.id;
    const updatedGame = req.body;

    //.keys() cria um array com as chaves de um objeto, permitindo usar .length
    if (Object.keys(updatedGame).length === 0) {
        res.status(404).send("Não foi possível atualizar: Dados ausentes.")
        //Irá ocorrer caso o objeto da req venha vazio
    } else {
        const gameID = gamesJson.findIndex(game => game.id == reqID);
        gamesJson.splice(gameID, 1, updatedGame);
        res.status(201).json([{
            message: "Jogo atualizado!",updatedGame}]);
    }
};

const deleteGame = (req, res) => {
    const reqID = req.params.id;
    const gameToDelete = gamesJson.findIndex(game => game.id == reqID);

    if (gameToDelete == -1) {
        res.status(404).send("Jogo não encontrado!")
    } else {
        gamesJson.splice(gameToDelete, 1)
        res.status(200).json([{
            message: "Jogo removido com sucesso! Jogos atuais:", gamesJson
        }])
    }
};

const likeGame = (req, res) => {
    const reqID = req.params.id;
    const selectedGame = gamesJson.find(game => game.id == reqID);

    if (selectedGame) {
        selectedGame.liked = !(selectedGame.liked);
        res.status(200).json([{
            message: "Jogo atualizado!", selectedGame, gamesJson
        }])
    } else {
        res.status(404).send("Jogo não encontrado!");
    }
};

module.exports = {
    getAllGames,
    getGame,
    addGame,
    editGame,
    deleteGame,
    likeGame
}