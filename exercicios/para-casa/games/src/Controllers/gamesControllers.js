const gamesJson = require("../models/games.json")


const getAllGames = (request, response) => {
    response.status(200).json([{
        "games": gamesJson
    }])
}

const getGamesId = (request, response) => {
    const gamesRequest = request.params.id
    const gamesFilter = gamesJson.filter((game) => game.id == gameRequest)

    response.status(200).json([{
        message: "Game encontrado"
    }])
}

const addNewGame = (request, response) => {
    try {
        let titleRequest = request.body.title
        let launchYearRequest = request.body.launchYearRequest
        let consolesRequest = request.body.consolesRequest
        let likedRequest = request.body.likedRequest

        let newGame = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consolesRequest,
            liked: likedRequest,
        };
    gamesJson.push(newGame)
    response.status(200).json([{
        message: "Game novo cadastrado."
    }])

    } catch (error) {
        console.log(error)
        response.status(500).send([{
            message: "Erro ao cadastrar novo game."
        }])
    }
}

const updateGame = (request, response) => {
    const idRequest = request.params.id
    let gameRequest = request.body
    let findGame = gamesJson.findIndex((song) => song.id == idRequest)

    if (gamesJson.splice(findGame, 1, gameRequest)) {
        response.status(200).json([{
            message: "Game atualizado com sucesso.",
            gamesJson
        }])
    } else {
        response.status(404).send([{
            message: "Game não encontrado"
        }])
    }
}

const likedGame = (request, response) => {
    const idRequest = request.params.id
    const likedRequest = request.body.liked
    likedFind = gamesJson.find((game) => game.id == idRequest)

    if (likedGame) {
        likedFind.liked = likedRequest,
        response.status(200).json([{
            message: "Classificação atualizada",
        }])
    } else {
        response.status(404),json([{
            message: "Classificação não atualizada."
        }])
        
    }
}

const deleteGame = (request, response) => {
    const idRequest = request.params.id
    const findGame = gamesJson.findIndex((game) => game.id == idRequest)

    gamesJson.splice(findGame, 1)

    if (findGame) {
        response.status(200).json([{
            message: "Game deletado com sucesso",
            gamesJson
        }])
    } else {
        response.status(404).send([{
            message: "Game não foi deletado!"
        }]) 
    }
}




module.exports = {
    getAllGames,
    getGamesId,
    addNewGame,
    updateGame,
    likedGame,
    deleteGame,
}