const seriesController = require("../controllers/seriesController")
const express = require("express")
const router = express.Router()


router.get("/", seriesController.getAllSeries)
router.get("/:id", seriesController.getById)
router.get("/genero", seriesController.getByGenre)
// router.post("/add", seriesController.addSerie)
router.delete("/:id", seriesController.deleteSerie)
router.patch("/update/:id/liked", seriesController.updateSeries)

module.exports = router 