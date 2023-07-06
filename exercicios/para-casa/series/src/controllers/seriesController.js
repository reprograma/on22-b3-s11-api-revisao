const { request } = require("express");
const series = require("../models/series.json");

const getAllSeries = (_, response) => {
  return response.status(200).json({
    data: series,
  });
};

const getByGenre = (request, response) => {
  const genre = request.query.genre;
  const foundSeries = series.filter((serie) => {
    return serie.genre.toLocaleLowerCase() === genre.toLocaleLowerCase();
  });
  return response.status(200).json({
    data: foundSeries,
  });
};

const getById = (request, response) => {
  const id = request.params.id;
  const foundSerie = series.find((serie) => {
    return serie.id === Number(id);
  });
  return response.status(200).json({
    data: foundSerie,
  });
};

const deleteSerie = (request, response) => {
  const id = request.params.id;
  const filteredSeries = series.filter((serie) => {
    return serie.id !== Number(id);
  });
  return response.status(200).json({
    data: filteredSeries,
  });
};

const updateSeries = (request, response) => {
  const id = request.params.id;
  const foundSerie = series.find((serie) => {
    return serie.id === Number(id);
  });

  const liked = request.body.liked;
  foundSerie.liked = liked;
  
  return response.status(200).json({
    data: foundSerie,
  });
};

module.exports = {
  getAllSeries,
  getByGenre,
  getById,
  deleteSerie,
  updateSeries,
};
