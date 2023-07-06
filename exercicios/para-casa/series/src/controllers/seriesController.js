const series = require("../models/series.json");

const getAllSeries = (_, response) => {
  return response.status(200).json({
    data: series,
  });
};

const getByGenre = (request, response) => {
  const genre = request.query.genre;
  const foundSeries = series.filter((serie) => {
    return serie.genre.toLocaleLowerCase === genre.toLocaleLowerCase;
  });
  return response.status(200).json({
    data: foundSeries,
  });
};

module.exports = {
  getAllSeries,
  getByGenre,
};
