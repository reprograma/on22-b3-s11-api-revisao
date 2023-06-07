const gamesJson = require ("../models/games.json")

const getAllGames = (req, res) => {
    try {
        res.status(200).json([{
            games: gamesJson
        }])
        
    } catch (err) {
        res.status(500).send([{
            message: "Erro no server"
        }])
        
    }
}

const getGames = (req, res) => {
    const gameRequest = req. params.id
    const gameFilter = gamesJson.filter ((game)=> game.id == gameRequest)
    if(gameFilter.length > 0){
        res.status(200).send (gameFilter)


    }else{
        res.status(200).send([{
            message: "Not Found!"
        }])
    }
}

const addGames = (req, res) =>{
    try {
        let titleRequest = req.body.title
        let launchYearRequest = req.body.launchYear
        let consolesRequest = req.body.consoles

        let newGame = {
            id:Math.floor(Date.now() * Math.random().toString (36)),
            title: titleRequest,
            launchYear: launchYearRequest,
             consoles: consolesRequest
        }
    
        gamesJson.push(newGame)
        res.status(201).json([{
            message: "Novo jogo cadastrado!",
            newGame
        }])
    } catch (error) {
        console.log(error)
        res.status(500).send([{
            message: "Erro interno ao cadastrar!"
        }])
        }

}

const updateGames = (req, res) => {
    const idRequest = req.params.id
    let gameRequest = req.body
    let findGame = gamesJson.findIndex((games)=>games.id == idRequest)

    if (gamesJson.splice(findGame, 1, gameRequest)){
        res.status(200).json([{
            message: "Jogo atualizado com sucesso!",
            gamesJson
        }])
    }else{
        res.status(404).send([{
            message: "Jogo não encontrado!"
        }])
    }
}


const deleteGames = (req, res) =>{
    const idRequest = req.params.id
    const indiceGames = gamesJson.findIndex((games)=>games.id == idRequest)

    gamesJson.splice(indiceGames, 1)

    if (indiceGames) {
        res.status(200).json([{
            message: "O jogo foi deletado !",
            "Jogo deletado": idRequest,
            gamesJson

        }])
        
    } else {
        res.status(404).send([{
            message: "Jogo não encontrado !"
        }])
    }
}

const updateGamesLiked = (req, res) =>{
    const idRequest = req.params.id
    let gameRequest = req.body
    let findGame = gamesJson.findIndex((game)=>game.id == idRequest)

    if (gamesJson.splice(findGame, 1, gameRequest)) {
        res.status(200).json([{
            message: "Jogo atualizado com sucesso!",
            gamesJson

        }])
    } else {
        res.status(404).send([{
            message: "Jogo não encontrado!"
        }])        
    }
}
module.exports = {
    getAllGames,
    getGames,
    addGames,
    updateGames,
    deleteGames,
    updateGamesLiked 
}