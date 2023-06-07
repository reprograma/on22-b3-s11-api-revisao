const gamesJson = require("/../games/src/models/games.json")
const express = require("express")
const app = express()
app.use(express.json())

const getAllGames = (req, res) => {
    res.status(200).json([{
        "games": gamesJson
    }])
}

const getGameById = (req, res) => {
    const gameRequest = req.params.id
    const gameFilter = gamesJson.filter((game) => game.id == gameRequest)

    if(gameFilter.length > 0) {
        res.status(200).send(gameFilter)
    }else {
        res.status(404).send([{
            message: "Jogo não encontrado."
        }])
    }
}

const addGame = (req, res) => {
    try {
        let titleRequest = req.body.title;
        let launchYearRequest = req.body.launchYear;
        let consolesRequest = req.body.consoles;
        let likedRequest = req.body.liked

        let newGame = {
            id: Math.floor(Date.now() * Math.random().toString(36)),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consolesRequest,
            liked: likedRequest
        };
        gamesJson.push(newGame)
        res.status(201).json([{
            message: "Novo jogo cadastrado!"
        }])
    } catch (err) {
        console.log(err)
        res.status(500).send([{
            message: "Erro interno ao cadastrar novo jogo."
        }])
    }
}

const updateGameById = (req, res) => {
    const idRequest = req.params.id
    let gameRequest = req.body.game
    let findGame = gamesJson.findIndex((game) => game.id == idRequest)

    if(gamesJson.splice(findGame, 1, gameRequest)) {
        res.status(200).json([{
            message: "Jogo atualizado com sucesso!!",
            gamesJson
        }])
    }else {
        res.status(404).send([{
            message: "Jogo não encontrado."
        }])
    }
}

const deleteGame = (req, res) => {
    const idRequest = req.params.id
    const findGame = gamesJson.findIndex((game) => game.id == idRequest)

    gamesJson.splice(findGame, 1,)

    if(findGame) {
        res.status(200).json([{
            message: "O jogo selecionado foi apagado!",
            "jogo deletado": idRequest,
            gamesJson
        }])
    }else {
        res.status(404).send([{
            message: "Música não apagada."
        }])
    }
}

const updateLikeById = (req, res) => {
    const idRequest = req.params.id
    const updateLiked = rqe.body.liked
    let findGame = gamesJson.find(game => game.id == idRequest)

    findGame.liked = updateLiked
    res.status(200).json([{
        "message": "Liked atualizado!",
        findGame
    }])
}

module.exports = {
    getAllGames,
    getGameById,
    addGame,
    updateGameById,
    deleteGame,
    updateLikeById
}