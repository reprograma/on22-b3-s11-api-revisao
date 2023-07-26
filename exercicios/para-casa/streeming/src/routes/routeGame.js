const controllerGame = require("../controllers/controllerGame.js")
const express = require("express")
const router = express.Router()

router.get("/library", controllerGame.getAllGame);
router.get("/:id", controllerGame.getIdGame);
router.post("/cadastro", controllerGame.cadastroGame);
router.put("/update/:id", controllerGame.updateIdGame);
router.delete("/delete/:id", controllerGame.deleteIdGame);
router.patch("/updated/:id", controllerGame.updateLikeGame);

module.exports = router
