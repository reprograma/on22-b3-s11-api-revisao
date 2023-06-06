const gamesController = require("../controller/gameController");
const express = require("express");
const router = express.Router();

router.get("/games", gamesController.getAll);
router.get("/games/:id", gamesController.getById);
router.post("/newGame", gamesController.addNewGame);
router.put("/update/:id", gamesController.updateById);
router.delete("/delete/:id", gamesController.deleteGame);
router.patch("/liked/:id", gamesController.likedGame);

module.exports = router;
