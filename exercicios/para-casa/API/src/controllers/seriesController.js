// IMPORTS
const series = require('../models/series.json');
const path = require('path');
const fs = require('fs');

// CONFIG
const seriesFilePath = path.join(__dirname, '../models/series.json');

const errorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({
    status: 'error',
    message: message,
  });
};

// POST  ////////////////////////////////////////////////////////////////
const postSeries = (req, res) => {
  try {
    const newId = series[series.length - 1].id + 1;
    const newSeries = Object.assign({ id: newId }, req.body);

    series.push(newSeries);
    fs.writeFile(seriesFilePath, JSON.stringify(series), () => {
      res.status(201).json({
        status: 'success',
        data: { series },
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// GET  ////////////////////////////////////////////////////////////////
const getAllseries = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      data: { series },
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// GET  ////////////////////////////////////////////////////////////////
const getSeriesByID = (req, res) => {
  try {
    const idRequest = req.params.id;
    const seriesData = series.find(
      (series) => series.id == idRequest
    );

    if (!seriesData) {
      return errorResponse(res, 404, 'Not found');
    }

    res.status(200).json({
      status: 'success',
      data: { seriesData },
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// GET  ////////////////////////////////////////////////////////////////
const getSeriesByGenre = (req, res) => {
  try {
    const genreRequest = req.query.genre.toLowerCase();

    const filteredSeries = series.filter((series) =>
      series.genre.toLowerCase().includes(genreRequest),
    );

    res.status(200).json({
      status: 'success',
      data: {series: filteredSeries},
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// PUT  ////////////////////////////////////////////////////////////////
const updateSeries = (req, res) => {
  try {
    const idRequest = req.params.id;
    const seriesRequest = req.body;

    const indexToUpdate = series.findIndex(
      (series) => series.id == idRequest
    );

    if (indexToUpdate == -1) {
      return errorResponse(res, 404, 'Not found');
    }

    series[indexToUpdate] = {
      ...series[indexToUpdate],
      ...seriesRequest,
    };

    fs.writeFile(seriesFilePath, JSON.stringify(series), () => {
      res.status(200).json({
        status: 'success',
        message: 'Updated successfully',
        data: { series: series[indexToUpdate] },
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// PATCH  ////////////////////////////////////////////////////////////////
const patchLike = (req, res) => {
  try {
    const idRequest = req.params.id;
    const { liked } = req.body;

    const indexToUpdate = series.findIndex(
      (series) => series.id == idRequest
    );

    if (indexToUpdate == -1) {
      return errorResponse(res, 404, 'Not found');
    }

    series[indexToUpdate].liked = liked;

    fs.writeFile(seriesFilePath, JSON.stringify(series), () => {
      res.status(200).json({
        status: 'success',
        message: 'Updated successfully',
        data: { series: series[indexToUpdate] },
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// DELETE  ////////////////////////////////////////////////////////////////
const deleteSeries = (req, res) => {
  try {
    const idRequest = req.params.id;

    const indexToDelete = series.findIndex(
      (series) => series.id == idRequest
    );

    if (indexToDelete == -1) {
      return errorResponse(res, 404, 'Not found');
    }

    const deletedSeries = series.splice(indexToDelete, 1);

    fs.writeFile(seriesFilePath, JSON.stringify(series), () => {
      res.status(200).json({
        status: 'success',
        message: 'Deleted successfully',
        data: { series: deletedSeries },
      });
    });
  } catch (err) {
    console.log(err);
    errorResponse(res, 500, `There was an error: ${err}`);
  }
};

// EXPORTS
module.exports = {
  postSeries,
  getAllseries,
  getSeriesByID,
  getSeriesByGenre,
  updateSeries,
  deleteSeries,
  patchLike,
};
