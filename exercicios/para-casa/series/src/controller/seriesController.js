const seriesJson = require("../models/series.json");

const getAllSeries = (_req, res) => {
  res.status(200).send(seriesJson);
}

const getSeriesbyid = (req, res) => {
  const id = req.params.id;
  const requestSerie = seriesJson.filter(serie => serie.id == id);
  res.status(200).json(requestSerie);
}

module.exports = {
  getAllSeries,
  getSeriesbyid
}