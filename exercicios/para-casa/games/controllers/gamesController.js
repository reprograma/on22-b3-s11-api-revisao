const gamesJson = require("../models/games.json")

const getAllGames = (request, response) => {
    try {
        response.status(200).json([{
            games: gamesJson
        }])
    } catch (error) {
        response.status(500).send([{
            message: "erro no server"
        }])
    }
}

const getGame = (request, response) => {
    const gameRequest = request.params.id
    const gameFilter = gamesJson.filter((game) => game.id == gameRequest)
    
    if (gameFilter.length > 0) {
        response.status(200).send(gameFilter)
    } else {
        response.status(404).send([{
            message : "Game not foud!"
        }])
    }
}


const addGame = (req, res) => {
    try {
        let titleRequest = req.body.title;
        let launchYearRequest = req.body.launchYear
        let consolesRequest = req.body.consoles
        let likedRequest = req.body.liked
        
        let newGame = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest, 
            consoles: consolesRequest,
            liked: likedRequest,
        };
        gamesJson.push(newGame)
        res.status(201).json([{
            message: "Novo jogo cadastrado"
        }])
    } catch (err) {
        console.log(err)
        res.status(500).send([{
            message: "Erro interno ao cadastrar."
        }])
    }
}

const updateGame = (req, res) => {
    const idRequest = req.params.id
    let gameRequest = req.body
    let findGame = gamesJson.findIndex((game) => game.id == idRequest)

    if (gamesJson.splice(findGame, 1, gameRequest)) {
        res.status(200).json([{
            message: "Jogo bem atualizado",
            gamessJson
        }])
    } else {
        res.status(404).send([{
            message: "Deu errado"
        }])
    }
}

const deleteGame = (req, res) => {
    const idRequest = req.params.id
    const findGame = gamesJson.findIndex((game) => game.id == idRequest)

    gamesJson.splice(findGame, 1)
    
    if (findGame) {
        res.status(200).json([{
            message: "O jogo foi deletado",
            "Jogo deletado": idRequest,
            gamesJson
        }])
    } else {
        res.status(404).send([{
            message: "Jogo não deletado"
        }])
    }
}

const updateLike = (req, res) => {
    const idRequest = req.params.id
    const likedRequest = req.body.liked
    likedFind = gamesJson.find((game) => game.id == idRequest)

    if (likedFind) {
        likedFind.liked = likedRequest
        res.status(200).json([{
            message: "Jogo atualizado"
        }])
    } else {
        res.status(404).json([{
            message: "Not found"
        }])
    }
}


module.exports = {
    getAllGames,
    getGame,
    addGame,
    updateGame,
    deleteGame,
    updateLike
}