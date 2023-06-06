const gamesController = require("../controllers/gamesController")
const express = require("express") 

const router = express.Router() 
router.get("/games", gamesController.getAllGames);
router.get("/games/:id", gamesController.getGame);
router.post("/games", gamesController.addGame); 
router.put("/games/:id", gamesController.updateGame);
router.delete("/games/:id", gamesController.deleteGame);
router.patch("/games/:id/liked", gamesController.updateLike);


module.exports = router 