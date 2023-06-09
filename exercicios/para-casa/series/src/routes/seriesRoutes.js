const seriesController = require("../controllers/seriesController"); //importa o controller
const express = require("express"); //importa o express

const router = express.Router(); //função de rotas do express

//router.metodohttp(rota, função)
router.get("/library", seriesController.getAllSeries);
router.get("/genero", seriesController.getGenre);
router.get("/serie/:id", seriesController.getById);
router.post("/add", seriesController.addSeries);
router.delete("/delete/:id", seriesController.deleteSeries);
router.patch("/series/:id/liked", seriesController.updateLike);

module.exports = router;