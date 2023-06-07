const gamesJson = require("../models/games.json")
const fs = require("fs") 


const getAllGame = (req, res) =>{
    try{
        console.log("Games é visualizada com sucesso.")
        res.status(200).json([{
            Games: gamesJson
        }])
    } catch(err){
        console.log("erro no serve, games não podem ser visualizadas.")
            
        res.status(500).send([{
            messagem:"erro no server"
        }])
    }
}

const getIdGame = (req, res) =>{
    const idRequest = req.params.id
    const findId = gamesJson.find(game => game.id == idRequest)
    if(findId){
        console.log("Games é visualizada com sucesso.")
        res.status(200).send(findId)
    }else{
        console.log("erro no serve, games não podem ser visualizadas.")
        res.status(404).send([{
            message: "not found game"
        }])
    }
}

const cadastroGame = (req, res) =>{
    const { id, title, launchYear, consoles, liked } = req.body
    gamesJson.push({id:(gamesJson.length +1),title, launchYear, consoles, liked}) 
    fs.writeFile("./streaming/src/models/games.json", JSON.stringify(gamesJson), "utf8", function(err){
        if(err){
            console.log("erro, seu game não foi cadastrado. Tente novamente!")
            res.status(500).send({
                message: err
            })
        }else{
            console.log("o game foi cadastrado com sucesso.")
            const findgames = gamesJson.find(games => games.id == id)
            res.status(200).send([{
                findgames, gamesJson
            }])
        }
    })
} 
  
const updateIdGame = (req, res) =>{
const idRequest = req.params.id
let gamesRequest = req.body
let findGames = gamesJson.findIndex((game) => game.id == idRequest)
    if (gamesJson.splice(findGames, 1, gamesRequest)) {
        console.log("Game foi atualizado com sucesso.")
        res.status(200).json([{
            message: "game atualizado com sucesso", gamesJson
        }])
    } else {
        console.log("Erro, seu game não foi atualizado. Tente novamente!")
         res.status(404).send([{
            message: 'game não encontrado!'
            }])
    }
} 

const deleteIdGame = (req, res) =>{
    const idRequest = req.params.id
    const gamesFilter = gamesJson.findIndex((game) => game.id == idRequest)
    gamesJson.splice(gamesFilter, 1)
    if(gamesFilter){
        console.log("o game foi deletado com sucesso.")
        res.status(200).json([{
            message: "O game selecionado foi deletado com sucesso",
             "game deletado": idRequest,
              gamesJson 
        }])
    } else {
        console.log("Erro, o game selecionado não foi deletado. tente novamente!")
        res.status(404).send([{
            message: "erro! o game selecionado não foi deletado."
        }])
    }
}
    
    const updateLikeGame = (req, res) =>{
    const idRequest = req.params.id
    const updateRequest = req.body.liked
     findUpdate = gamesJson.find((game) => game.id == idRequest)
    if(findUpdate){
        console.log("Game foi atualizado com sucesso.")
        findUpdate.liked = updateRequest,
        res.status(200).json([{
            message: "Liked atualizado com sucesso."
        }])
    }else{
        console.log("Erro, seu liked não foi atualizado. Tente novamente!")

        res.status(404).json([{
            message: "not found game"
        }])
    }
}




module.exports = {
    getAllGame,
    getIdGame,
    cadastroGame,
    updateIdGame,
    deleteIdGame,
    updateLikeGame
}