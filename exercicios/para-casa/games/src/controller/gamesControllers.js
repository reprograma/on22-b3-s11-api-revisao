const gamesJson = require("../models/games.json")

const getAllGames = (req, res) => {
    try {
        res.status(200).json([{
            gamesJson : gamesJson
        }])
    } catch (err) {
        res.status(500).send([{
            message: 'Erro no servidor'
        }])
    }
}

const getById = (req, res) => {
    try {
        const gamesId = req.params.id
        const gamesProcura = gamesJson.find(games => games.id == gamesId)
        if (gamesProcura) {
            res.status(200).json([{
                message: "Games encontrado!!!",
                games: gamesProcura
            }])
        } else {
            res.status(404).json([{
                message: "games não encontrado"
            }])
        }
    } catch (error) {
        res.status(500).json([{
            message: "erro no servidor"
        }])
    }
}

const addGames = (req, res) => {
    try {
        let titleRequest = req.body.title 
        let launchYearRequest = req.body.launch
        let consolesRequest = req.body.consoles
        let likedRequest = req.body.liked

        const newGames = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consolesRequest,
            liked: likedRequest
        };
        gamesJson.push(newGames)
        res.status(200).json([{
            message: "Novo jogo", newGames
        }])
    } catch (error) { 
        console.log(error)
        res.status(500).json([{
            message: "Deu ruim!!"
        }])
    }
}

const updateGames = (req, res) => {
    const idRequest = req.params.id
    const consolesRequest = req.body.consoles
    const gamesFind = gamesJson.find((games) => games.id == idRequest)
    if (gamesFind) {
        gamesFind.consoles = consolesRequest
        res.status(200).json([{
        menssage: "Atualizado com sucesso", gamesFind 
        }])
        
    } else {
        res.status(404).json([{
            messagem: "Não foi modificado"
        }])
    }
}

const deleteGames = (req, res) => {
    const idRequest = req.params.id
    const foundGames = gamesJson.findIndex((games) => games.id == idRequest)
    gamesJson.splice(foundGames, 1)
    if (foundGames) {
        res.status(200).json([{
        message: "Game deletado", gamesJson
        }])
    } else {
        res.status(404).json([{
            message: "Não deletou"
        }])
    }
}

const updateLikedGames = (req, res) => {
    const idRequest = req.params.id
    const likedRequest = req.body.liked
    const findGame = gamesJson.find((game) => game.id == idRequest)

    if (findGame) {
        findGame.liked = likedRequest
        res.status(200).json([{
            message: "Atualizado com sucesso",
            findGame
        }])
        
    } else {
        res.status(404).json([{
            message: "Não foi encontrado"
        }])
    }
}



module.exports = {
    getAllGames,
    getById,
    addGames,
    updateGames,
    deleteGames,
    updateLikedGames
}