const gamesJson = require("../models/games.json")

const getAllGames = (req, res)=>{
    try {
        res.status(200).json([{
            games : gamesJson
        }])
    } catch (error) {
        res.status(500).send([{
            messeage : "erro no server"
        }])
    }
}

const getGame = (req,res)=>{
    const gameRequest = req.params.id
    const gameFilter = gamesJson.filter((game) => game.id == gameRequest)

    if(gameFilter.length > 0) {
        res.status(200).send(gameFilter)
    }   else {
            res.status(404).send([{
                message : "Not found / Game não encontrado"
            }])
        }
    }


    const addGame = (req, res) => {
        try {
            let titleRequest = req.body.title;
            let launchYearRequest = req.body.launchYear;
            let consolesRequest = req.body.consoles
            let likedRequest = req.body.favorited;
                
            let newGame = {
                id: Math.floor(Date.now() * Math.random()).toString(36),
                title: titleRequest,
                launchYear: launchYearRequest,
                favorited: likedRequest,
                consoles: consolesRequest,
            };
            gamesJson.push(newGame)
            res.status(201).json([{
                message: "Novo jogo cadastrado"
            }])
        } catch (error) {
            console.log(error)
            res.status(500).send(([{
                message: "Erro interno ao cadastrar"
            }]))
            
        }
    }
    
    const updateGame = (req, res) => {
        const idRequest = req.params.id
        let gameRequest = req.body
        let findGame = gamesJson.findIndex((game) => game.id == idRequest)
    
        if(gamesJson.splice(findGame, 1, gameRequest)) {
            res.status(200).json([{
                message: "Jogo atualizado com sucesso.",
                gamesJson
            }])
            }
            else {
                res.status(404).send([{
                    message:"Jogo não encontrado"
                }])
            }
    
            
        }


        const deleteGame = (req, res) => {
            const idRequest = req.params.id
            const findGame = gamesJson.findIndex((game) => game.id == idRequest)
    
            gamesJson.splice(findGame, 1)
    
            if(findGame) {
                res.status(200).json([{
                    message: "O jogo foi deletado",
                    "jogo deletado": idRequest,
                    gamesJson
                }])
    
            } else {
                res.status(404).send([{
                    message: "Not found / Jogo não deletado."
                }])
    
            }
    
        }

        const updateFav = (req, res) => {
            const idRequest = req.params.id
            const likedRequest = req.body.liked
            likedFind = gamesJson.find((game) => game.id == idRequest)
    
            if (likedFind) {
                likedFind.liked = likedRequest,
                res.status(200).json([{
                    message: "Classificação atualizada com sucesso."
                }])
                
            } else {
                res.status(404).json([{
                    message: "Pulo"
                }])
                
            }
        }
    
    
module.exports={
    getAllGames,
    getGame,
    addGame,
    updateGame,
    deleteGame,
    updateFav
}
