const gamesJson = require('../models/games.json')
const fs = require('fs')

const getAllGames = (req, res) => {
    res.status(200).send([{
        gamesJson
    }])
}

const getGameById = (req, res) => {
    const gameRequest = req.params.id
    const gameFilter = gamesJson.filter((game) => game.id == gameRequest)

    if (gameFilter.length > 0) {
        res.status(200).send(gameFilter)
    } else {
        res.status(404).send([{
            message: 'Game not found!'
        }])
    }
}

const addGame = (req, res) => {
    const {id, title, launchYear, consoles, liked} = req.body
    gamesJson.push({id:(gamesJson.length +1), title, launchYear, consoles, liked})
    fs.writeFile('./src/models/games.json', JSON.stringify(gamesJson), 'utf-8', function(err){
        if (err) {
            res.status(500).send({
                message: err
            })
        } else {
            console.log('Jogo criado com sucesso')
            const findGame = gamesJson.find(game => game.id == id)
            res.status(200).send([{
                findGame,
                gamesJson
            }])
        }
    })
}

const updateGame = (req, res) => {
    const gameId = req.params.id
    let gameRequest = req.body
    let findGame = gamesJson.findIndex((game) => game.id == gameId)

    if(gamesJson.splice(findGame, 1, gameRequest)){
        res.status(200).json([{
            message: 'Game atualizado com sucesso',
            gamesJson
        }])
    } else {
        res.status(404).send([{
            message: 'Game não encontrado!'
        }])
    }
}
const deleteGame = (req, res) => {
    const gameId = req.params.id
    const findGame = gamesJson.findIndex((game) => game.id == gameId)

    gamesJson.splice(findGame, 1)

    if (findGame) {
        res.status(200).json([{
            message: 'O game selecionado foi deletado com sucesso!',
            'game deletado': gameId,
            gamesJson
        }])
    } else {
        res.status(404).send([{
            message: 'Game não encontrado!'
        }])
    }
}

const updateLikedGame = (req, res) => {
    const requestId = req.params.id
    const likedRequest = req.body.liked
    findLiked = gamesJson.find((game) => game.id == requestId)

    if (findLiked) {
        findLiked.liked = likedRequest
        res.status(200).json([{
            message: 'Liked do game atualizado com sucesso!'
        }])
    } else {
        res.status(404).send([{
            message: 'O game não foi encontrado!'
        }])
    }
}
module.exports = {
    getAllGames,
    getGameById,
    addGame,
    updateGame,
    deleteGame,
    updateLikedGame
}

