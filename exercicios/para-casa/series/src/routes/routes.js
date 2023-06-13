const express = require("express");
const router = express.Router();
const seriesController = require("../controller/seriesController");

router.get("/", seriesController.getAllSeries);
router.get("/series/:id", seriesController.getSeriesbyid);

module.exports = router;
