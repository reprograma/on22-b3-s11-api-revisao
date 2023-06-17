const seriesController = require("../controller/seriesController")
const express = require("express")
const router = express.Router()


router.get("/series", seriesController.getAllSeries)
router.get("/series/:id", seriesController.getSeriesByID)
router.get("/genero", seriesController.getGenero)
router.post("/series/add", seriesController.addSerie)
router.delete("/series/delete/:id", seriesController.deleteSerie)
router.patch("/update/:id/liked", seriesController.updateSeries)



module.exports = router