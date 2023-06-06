const seriesJson = require('../models/series.json');
const fs = require('fs');

const getAllSeries = (req, res) => {
    try {
        res.status(200).json(seriesJson);
    } catch (error) {
        res.status(500).send("Houve interno em sua requisição.")
    }
}

const getSeriesByGenre = (req, res) => { }

const getSerieByID = (req, res) => { }

const addSerie = (req, res) => { }

const deleteSerieByID = (req, res) => {
    const reqID  = req.params.id;
    const index2Remove = seriesJson.findIndex(serie => serie.id == reqID);

    if (index2Remove == -1) {
        res.status(404).send("Série não encontrada!")
    } else {
        seriesJson.splice(index2Remove, 1);
        res.status(200).json([{
            message: "Série removida com sucesso! Séries disponíveis:", seriesJson
        }])
    }
}

const likeSerie = (req, res) => {
    const reqID = req.params.id;
    const selectedSerie = seriesJson.find(serie => serie.id == reqID);

    if (selectedSerie) {
        selectedSerie.liked = !(selectedSerie.liked);
        res.status(200).json([{
            message: "Série atualizada!", selectedSerie, seriesJson
        }])
    } else {
        res.status(404).send("Série não encontrada!");
    }
}


module.exports = {
    getAllSeries,
    getSeriesByGenre,
    getSerieByID,
    addSerie,
    deleteSerieByID,
    likeSerie
}