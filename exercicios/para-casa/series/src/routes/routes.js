const express = require("express");
const router = express.Router();
const seriesController = require("../controller/seriesController");

router.get("/", seriesController.getAllSeries);

module.exports = router;
