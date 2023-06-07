const gamesJson = require("../models/games.json")

//Rota Get para pegar todos os jogos
const getAllGames = (req, res) =>{
    try {
        res.status(200).json([{
            games : gamesJson
        }])
    } catch (error) {
        res.status(500).send([{
            message: "erro no servidor"
        }])
    }
}

//Rota Get para pegar o jogo pela sua ID
const getById = (req, res) =>{
    const gameRequest = req.params.id
    const gameFilter = gamesJson.filter(game => game.id == gameRequest)

    if(gameFilter.length > 0){
        res.status(200).send(gameFilter)
    }else{
        res.status(404).send([{
            message: 'jogo não encontrado'
        }])
    }
}

//Rota post para adicionar um novo jogo ao catálogo
const addGame = (req, res)=>{
    try {
        let titleRequest = req.body.title;
        let launchYearRequest = req.body.launchYear;
        let consolesRequest = req.body.consoles
        let likedRequest = req.body.liked

        let newGame = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consolesRequest,
            liked: likedRequest
        };
        gamesJson.push(newGame)
        res.status(201).json([{
            message: 'novo jogo cadastrado com sucesso',
            gamesJson
        }])
    } catch (error) {
        res.status(500).send([{
            message: "erro no servidor"
        }])
    }
}

//Rota put para atualizar um jogo pela sua ID
const updateById = (req, res)=>{
    const idRequest = req.params.id
    const gameRequest = req.body
    const findGame = gamesJson.findIndex((game) => game.id == idRequest)

    if (gamesJson.splice(findGame, 1, gameRequest)){
        res.status(200).json([{
            message: "jogo atualizado com sucesso", 
            gamesJson
        }])
    }else{
        res.status(404).send([{
            message: "jogo não encontrado"
        }])
    }
}

const deleteById = (req, res)=>{
    const idRequest = req.params.id
    let findGame = gamesJson.findIndex((game) => game.id == idRequest)

    gamesJson.splice(findGame, 1)
    if(findGame){
        res.status(200).json([{
            message: "jogo deletado com sucesso",
            gamesJson
        }])
    }else{
        res.status(404).send([{
            message: "jogo não encontrado"
        }])
    }
}

const updateLikedGamesById = (req, res)=>{
    const idRequest = req.params.id
    const likedRequest = req.body.liked
    likedFind = gamesJson.find((game) => game.id == idRequest)
    if(likedFind){
        likedFind.liked = likedRequest
        res.status(200).json([{
            message: "classificação atualizada com sucesso"
        }])
    }else{
        res.status(404).send([{
            message: "jogo/classificação não encontrada"
        }])
    }
}

module.exports = {
    getAllGames,
    getById,
    addGame,
    updateById,
    deleteById,
    updateLikedGamesById
}