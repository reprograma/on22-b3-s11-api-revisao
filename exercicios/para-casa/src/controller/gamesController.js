const gamesJson = require("../models/games.json")

//Retorna todos os jogos
const getAllGames =(req,res)=>{
    try {
        res.status(200).json([{
            games : gamesJson
        }])
    } catch (error) {
        res.status(500).send([{
            message : "Erro no server"
        }])
    }
}
//Retornar apenas um jogo específico
const getGameByID= (req,res)=>{
  const idRequest = req.params.id
  const findGame = gamesJson.find(game=> game.id == idRequest)
  try {
    res.status(200).send([{
        game: findGame
    }])
  } catch (error) {
    res.status(404).send([{
        message:"Not found"
    }])    
  }
}
//Cadastrar novo jogo
const addNewGame = (req,res)=>{
    try {
        let titleReq = req.body.title
        let launchYearReq = req.body.launchYear
        let consolesReq = req.body.consoles
        let likedReq = req.body.liked

        let newGame ={
            id: (gamesJson.length + 1),
            title: titleReq,
            launchYear: launchYearReq,
            consoles: consolesReq,
            liked:likedReq
        };
        gamesJson.push(newGame)
        res.status(200).json([{
            message: "novo jogo cadastrado",
            newGame          

        }])
    } catch (error) {
        res.status(500).send([{
            message:"Erro, jogo não cadastrado"
        }])
    }
}
//Atualizar um jogo by id
const updateGame = (req,res)=>{
  const idRequest= req.params.id
  const updGame= req.body
  const findGame = gamesJson.findIndex(game=> game.id == idRequest)
  
  try {
    gamesJson.splice(findGame,1,updGame)
    res.status(200).send([{
        message:"Jogo atualizado com sucesso",
        updGame, gamesJson
    }])
  } catch (error) {
    res.status(500).send([{
        message:"Erro, jogo não atualizado"
    }])
  }
}
//Deletar um jogo by id
const deleteGame = (req,res)=>{
 const idRequest= req.params.id
 const findGame = gamesJson.findIndex(game=> game.id == idRequest)
 gamesJson.splice(findGame,1)
 try {
    res.status(200).send([{
        message: "jogo deletado"
    }])
 } catch (error) {
    res.status(500).send([{
        message: "jogo nao deletado"
    }])
 }
}
// Atualizar se gostou ou não do jogo
const changeGame = (req,res)=>{
    const idRequest = req.params.id
    const likedReq = req.body.liked
    likedFind = gamesJson.find((game)=>game.id == idRequest)
    if (likedFind) {
        likedFind.liked = likedReq
        res.status(200).json([{
            message: "classificação atualizada com sucesso"
        }])
    } else {
        res.status(404).json([{
            message:"Não funcionou gata"
        }])
    }
}










module.exports = {
    getAllGames,
    getGameByID,
    addNewGame,
    updateGame,
    deleteGame,
    changeGame
}