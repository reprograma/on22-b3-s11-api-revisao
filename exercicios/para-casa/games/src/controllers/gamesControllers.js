const gamesJson = require("../models/games.json");


const getAllGames = (req, res) => {
    try {
        res.status(200).json([{
            gamesJson: gamesJson
        }])
    } catch (err) {
        res.status(500).send([{
            message: 'Erro no server!'
        }])
    }
}
   
const getById = (req, res) => {
    try {
        const gamesId = req.params.id
        const gamesFind = gamesJson.find(games => games.id == gamesId)
        if (gamesFind) {
            res.status(200).json([{
                message: "Gamer encontrado!",
                games: gamesFind
            }])
        } else {
            res.status(404).json({
                message: "Game não encontrado!!!"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "Erro no servidor!!!"
        });
    }
}

const addGames = (req, res) => {
    try {
        let titleRequest = req.body.title;
        let launchYearRequest = req.body.launchYear;
        let consolesRequest = req.body.consoles;
        let likedRequest = req.body.liked;

        const newgames = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleRequest,
            launchYear: launchYearRequest,
            consoles: consolesRequest,
            liked: likedRequest
        };
        gamesJson.push(newgames)
        res.status(200).json([{
            message: "Novo Jogo inserido!!!",
            newgames
        }])
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            message: "Erro interno ao cadastrar!!!"
        }])
    }
}

const updateGames = (req, res) =>{
    const idRequest = req.params.id
    const consolesRequest = req.body.consoles
    const gamesFind = gamesJson.find((games) => games.id == idRequest)

    if (gamesFind) {
        gamesFind.consoles =  consolesRequest
        res.status(200).json([{
            message: "Console atualizado com sucesso!!",
            gamesFind
        }])
    } else { 
        res.status(404).json([{
            message: "Não foi modificado, Cabeção!!!"
        }])
    }
}

const deleteGames = (req, res) => {
    const idRequest = req.params.id
    const foundGames = gamesJson.findIndex((games) => games.id == idRequest)

    gamesJson.splice(foundGames, 1)
    if (foundGames) {
        res.status(200).json([{
            message: "Game já não existe mais!!!", gamesJson
        }])
    } else {
        res.status(404).json([{
            message: "Não apagou não Pessoa!!!"
        }])
    }
}

const updateLikedGames = (req, res) =>{
    const idRequest = req.params.id;
    const likedRequest = req.body.liked;
    const findGame = gamesJson.find((game) => game.id == idRequest)

    if (findGame) {
        findGame.liked = likedRequest;
        res.status(200).json([{
            message: "Gostou do jogo atualizado com sucesso!!",
            findGame
        }])
    } else {
        res.status(404).json([{
            message: "Não foi atualizado! Tente de novo!!"
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

