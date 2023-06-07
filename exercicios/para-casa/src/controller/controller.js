const seriesJson = require("../series/models/series.json");

const getAllSeries = (req, res) => {
  return res.status(200).send(seriesJson);
};

const getById = (req, res) => {
  try {
    const id = req.params.id;
    const serieFound = seriesJson.find((serie) => serie.id == id);

    if (serieFound) {
      return res.status(200).send(serieFound);
    }

    return res.status(404).send({ message: "Serie não encontrada" });
  } catch {
    return res.status(400).send({ message: "Erro ao buscar série por id" });
  }
};

const getByGenero = (req, res) => {
  try {
    const genero = req.params.genero;
    const serieFound = seriesJson.find((serie) => serie.genre == genero);

    if (serieFound) {
      return res.status(200).send(serieFound);
    }

    return res.status(404).send({ message: "Série não encontrada" });
  } catch {
    return res.status(400).send({ message: "Erro ao buscar série por gênero" });
  }
};

const createSerie = (req, res) => {
  try {
    const newSerie = req.body;
    seriesJson.push(newSerie);

    return res.status(200).send(seriesJson);
  } catch {
    return res.status(400).send({ message: "Erro ao criar série" });
  }
};

const updateSerie = (req, res) => {
  try {
    const id = req.params.id;
    const serieFound = seriesJson.find((serie) => serie.id == id);

    if (serieFound) {
      serieFound.liked = req.body.liked;
      return res.status(200).send({ serieFound });
    }
    return res.status(404).send({ message: "Série não encontrada" });
  } catch {
    return res.status(400).send({ message: "Erro ao editar série" });
  }
};

const deleteSerie = (req, res) => {
  try {
    const id = req.params.id;
    const serieFound = seriesJson.findIndex((serie) => serie.id == id);

    if (serieFound !== -1) {
      seriesJson.splice(serieFound, 1);
      return res.status(201).send();
    }

    return res.status(404).send({ message: "Série não encontrada" });
  } catch {
   return res.status(400).send({ message: "Erro ao deletar série" });
  }
};

module.exports = {
  getAllSeries,
  getById,
  getByGenero,
  createSerie,
  updateSerie,
  deleteSerie,
};
