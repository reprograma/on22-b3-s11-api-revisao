const controllerGame = require("../controllers/controllerGame")
const express = require("express")
const router = express.Router()

router.get("/library", controllerGame.getAllGame);
router.get("/:id", controllerGame.getIdGame);
router.post("/cadastro", controllerGame.cadastroGame);
router.put("/update/:id", controllerGame.updateIdGame);
router.delete("/delete/:id", controllerGame.deleteIdGame);
router.patch("/updated/:id", controllerGame.updateLikeGame);

/*
| ok`GET` | /games - Retorna todos os jogos |
| ok`GET` | /games/:id - Retornar apenas um jogo específico |
| ok`POST` | /games - Cadastrar novo jogo |
|ok `PUT` | /games/:id - Atualizar um jogo específico |
|ok `DELETE` | /games/:id - Deletar um jogo específico |
| ok`PATCH` | /games/:id/liked - Atualizar se gostou ou não do jogo. |
{
    
        
*/

module.exports = router