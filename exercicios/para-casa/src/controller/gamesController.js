const gamesJson = require("../models/games.json")
const express = require("express")
const app = express()
app.use(express.json())


const getAllGames = (req, res) => {
    try {
        res.status(200).json([{
            "games": gamesJson
        }])
    } catch (err) {
        res.status(500).send(([{
            message: "Error :("
        }]))

    }
}


const getGameById = (req, res) => {
    const idRequest = req.params.id
    const gameFilter = gamesJson.filter((game) => game.id == idRequest) 
    if(gameFilter.length > 0) {
        res.status(200).send(gameFilter)
    }   else {
            res.status(404).send([{
                message : "game not found :("
            }])
        }
    }

const registerNewGame = (req, res) => {
        try {
            let titleRequest = req.body.title;
            let launchRequest = req.body.launchYear;
            let consolesRequest = req.body.consoles;
            let likedRequest = req.body.favorited;

            let newGame = {
                id: Math.floor(Date.now() * Math.random()).toString(36),
                title: titleRequest,
                launchYear: launchRequest,
                favorited: likedRequest,
                consoles: consolesRequest,
            };
            gamesJson.push(newGame)
            res.status(201).json([{
                message: "New game on the block :D"
            }])
        } catch (err) {
            res.status(500).send(([{
                message: "Error :("
            }]))

        }
    }



const updateGameById = (req, res) => {
    idRequest = req.params.id
    gameRequest = req.body
    let findGame = gamesJson.find((game) => game.id == idRequest)

    try {
        gamesJson.splice(findGame, 1, gameRequest) ;
        {
            res.status(200).json([{
                message: "Jogo atualizado com sucesso.",
                gamesJson
            }])
            }
    } catch (error) {
        res.status(500).send([{
            message: "error :("
        }])
    }
}

const deleteGameById = (req, res) => {
    const idRequest = req.params.id
    const findGame = gamesJson.find((game) => game.id == idRequest)

    gamesJson.splice(findGame,1)

    if(findGame) {
        res.status(200).json([{
            message: "the game is gone!",
            "deleted game": idRequest,
            gamesJson
        }])

    } else {
        res.status(500).send([{
            message: "error :("
        }])

    }

}

module.exports = {
    getAllGames,
    getGameById,
    registerNewGame,
    updateGameById,
    deleteGameById
}