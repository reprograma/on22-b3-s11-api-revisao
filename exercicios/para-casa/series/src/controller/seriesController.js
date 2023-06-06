const seriesJson = require("../models/series.json");

const getAllSeries = (_req, res) => {
  res.status(200).send(seriesJson);
}

module.exports = {
  getAllSeries
}