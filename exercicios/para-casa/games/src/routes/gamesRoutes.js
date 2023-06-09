const gamesController = require("../controllers/gamesController") //importa o controller
const express = require("express") //importa o express
const router = express.Router() //função de rotas do express

//router.método http(rota, função)

router.get("/games",gamesController.getAllGames);
router.get("/games/:id", gamesController.getGame);
router.post("/add",gamesController.addGame);
router.put("/update/:id",gamesController.updateGame);
router.delete("/delete/:id",gamesController.deleteGame);
router.patch("/liked/:id/",gamesController.updateFav);

module.exports = router