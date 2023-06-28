const seriesController = require("../controller/seriesController");
const express = require("express");
const router = express.Router();

router.get("/", seriesController.getAll);
router.get("/genre", seriesController.getByGenre);
router.get("/:id", seriesController.getById);
router.post("/", seriesController.uploadNewSerie);
router.delete("/:id", seriesController.deleteById);
router.patch("/:id/liked", seriesController.updateSeries);

module.exports = router;
