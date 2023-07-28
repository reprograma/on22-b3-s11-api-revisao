const gamesControllers = require("../controllers/gamesControllers")

const express = require("express")

const router = express.Router()


router.get("/all", gamesControllers.getAllGames);
router.get("/:id", gamesControllers.getById);
router.post("/add", gamesControllers.addGames);
router.put("/:id", gamesControllers.updateGames);
router.delete("/:id", gamesControllers.deleteGames);
router.patch("/liked/:id", gamesControllers.updateLikedGames);



module.exports = router 



 