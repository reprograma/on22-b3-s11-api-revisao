const { resolve } = require('path');
const gamesJson = require('../models/games.json');
const fs = require('fs');
const path = require('path');



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
    gamesJson.push(newGame)
    fs.writeFile('./src/games/models/games.json', JSON.stringify(gamesJson), 'utf-8', (err) => {
        if (err) {
            console.log(err)
            res.status(500).send('Arquivo não salvo pois ocorreu um erro');
        } else {
            res.status(201).json([{
                message: "Jogo adicionado com sucesso!", newGame
            }])
        }
    })

};

const editGame = (req, res) => {
    try {
        const reqID = req.params.id;
        const updatedGame = req.body;

        const gameID = gamesJson.findIndex(game => game.id == reqID);
        if (gameID == -1) {
            throw new Error("404");
        }
        //.keys() cria um array com as chaves de um objeto, permitindo usar .length
        if (Object.keys(updatedGame).length === 0) {
            res.status(406).send("Não foi possível atualizar: Dados ausentes.")
            //Irá ocorrer caso o objeto da req venha vazio
        } else {
            gamesJson.splice(gameID, 1, updatedGame);
            fs.writeFile('./src/games/models/games.json', JSON.stringify(gamesJson), 'utf-8', (err) => {
                if (err) {
                    console.log(err)
                    res.status(500).send('Arquivo não salvo pois ocorreu um erro');
                } else {
                    res.status(201).json([{
                        message: "Jogo atualizado!", updatedGame
                    }]);
                }
            })

        }
    }
    catch (error) {
        switch (error.message) {
            case "404":
                res.status(parseInt(error.message)).send("404: Not Found!");
                break;
            case "406":
                res.status(parseInt(error.message)).send("Não foi possível atualizar cadastro: Dados ausentes.");
                break;
            default:
                res.status(500).send("Ocorreu um erro interno.")
                break;
        }
    }
};

const deleteGame = (req, res) => {
    const reqID = req.params.id;
    const gameToDelete = gamesJson.findIndex(game => game.id == reqID);

    if (gameToDelete == -1) {
        res.status(404).send("Jogo não encontrado!")
    } else {
        gamesJson.splice(gameToDelete, 1)
        fs.writeFile('./src/games/models/games.json', JSON.stringify(gamesJson), 'utf-8', (err) => {
            if (err) {
                console.log(err)
                res.status(500).send('Ocorreu um erro na operação.');
            } else {
                res.status(200).json([{
                    message: "Jogo removido com sucesso! Jogos atuais:", gamesJson
                }])
            }
        })

    }
};

const likeGame = (req, res) => {
    const reqID = req.params.id;
    const selectedGame = gamesJson.find(game => game.id == reqID);

    if (selectedGame) {
        selectedGame.liked = !(selectedGame.liked);
        fs.writeFile('./src/games/models/games.json', JSON.stringify(gamesJson), 'utf-8', (err) => {
            if (err) {
                console.log(err)
                res.status(500).send('Ocorreu um erro na operação.');
            } else {
                res.status(200).json([{
                    message: "Favorito atualizado!", selectedGame, gamesJson
                }])
            }
        })

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