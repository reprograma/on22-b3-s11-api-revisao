// IMPORTS
const series = require('../models/series.json');
const fs = require('fs')

// METHODS

const postSeries = (req, res) => {};

const getSeriesByID = (req, res) => {
try {
  const idRequest = req.params.id;
  const seriesData = series.find((series) => series.id === idRequest);

  res.status(200).json({
    status: 'success',
    data: { seriesData },
  });
} catch (error) {
  res.status(500).json({
    status: 'error',
    message: `There was an error: ${err}`,
  });
}
};

const getAllSeries = (req, res) => {
    try {
    res.status(200).json({
      status: "success",
      data: {series}
    })
  } catch {
    res.status(500).json({
      status: "error",
      message: "There was an error! :("
    })
  }
};

const getSeriesGenre = (req, res) => {};

const deleteSeries = (req, res) => {};

const patchLike = (req, res) => {};

// EXPORTS
module.exports = {
  postSeries,
  getSeriesByID,
  getAllSeries,
  getSeriesGenre,
  deleteSeries,
  patchLike,
};
