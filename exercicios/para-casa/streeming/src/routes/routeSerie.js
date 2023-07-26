const controllerSerie = require("../controllers/controllerSerie")
const express = require("express")
const router = express.Router()

router.get("/library", controllerSerie.getAllSerie);
router.get("/:id", controllerSerie.getIdSerie);
router.post("/cadastro", controllerSerie.cadastroSerie)
router.delete("/delete/:id", controllerSerie.deleteIdSerie)
router.patch("/updated/:id", controllerSerie.updateLikeSerie)

module.exports = router
