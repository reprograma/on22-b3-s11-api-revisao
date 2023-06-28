const seriesJson = require("../models/series.json");
const express = require("express");
const app = express();
app.use(express.json());

const getAll = (req, res) => {
  res.status(200).json([
    {
      series: seriesJson,
    },
  ]);
};

const getByGenre = (req, res) => {
  const genreRequest = req.query.genre.toLocaleLowerCase();
  const serieEncontrada = seriesJson.filter((serie) =>
    serie.genre.toLocaleLowerCase().includes(genreRequest)
  );
  res.status(200).send(serieEncontrada);
};

const getById = (req, res) => {
  const idRequest = req.params.id;
  const serieEncontrada = seriesJson.find((serie) => serie.id == idRequest);

  res.status(200).send(serieEncontrada);
};

const uploadNewSerie = (req, res) => {
  let titleRequest = req.body.titleRequest;
  let genreRequest = req.body.genre;
  let synopsisRequest = req.body.synopsis;
  let likedRequest = req.body.liked;
  let seasonsRequest = req.body.seasons;

  let newSerie = {
    id: seriesJson.length + 1,
    title: titleRequest,
    genre: genreRequest,
    synopsis: synopsisRequest,
    liked: likedRequest,
    seasons: seasonsRequest,
  };

  seriesJson.push(newSerie);
  res.status(200).json([
    {
      message: "The serie was uploaded successfully",
    },
  ]);
};

const deleteById = (req, res) => {
  const idRequest = req.params.id;
  const findSerie = seriesJson.findIndex((serie) => serie.id == idRequest);
  seriesJson.splice(deleteById, 1);

  res.status(200).json([
    {
      message: "Deleted serie by ID",
      deleted: idRequest,
      seriesJson,
    },
  ]);
};

const updateSeries = (req, res) => {
  const idRequest = req.params.id;
  const serieRequest = req.body;
  const serieFind = seriesJson.findIndex((serie) => serie.id == idRequest);

  if (seriesJson.splice(serieFind, 1, serieRequest)) {
    res.status(200).json([
      {
        message: "Updated serie",
        seriesJson,
      },
    ]);
  } else {
    res.status(404).send([
      {
        message: "Serie not found",
      },
    ]);
  }
};

module.exports = {
  getAll,
  getByGenre,
  getById,
  uploadNewSerie,
  deleteById,
  updateSeries,
};
