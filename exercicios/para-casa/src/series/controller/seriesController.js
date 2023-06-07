const seriesJson = require('../models/series.json');
const fs = require('fs');

const getAllSeries = (req, res) => {
    try {
        res.status(200).json(seriesJson);
    } catch (error) {
        res.status(500).send("Houve interno em sua requisição.")
    }
}

const getSeriesByGenre = (req, res) => {
    const genreToSearch = req.query.genero.toLowerCase();
    const seriesFound = seriesJson.filter(series => series.genre.toLocaleLowerCase().includes(genreToSearch));

    if (Object.keys(seriesFound).length === 0) {
        res.status(404).send("Not Found!")

    } else {
        res.status(200).json(seriesFound)
    }
}

const getSerieByID = (req, res) => {
    const reqID = req.params.id;
    const serieFound = seriesJson.find(serie => serie.id == reqID);
    if (serieFound) {
        res.status(200).json(serieFound)
    } else {
        res.status(404).send("Not found!")
    }
}

const addSerie = async (req, res) => {
    try {
        if (Object.keys(req.body).length == 0) {
            res.status(406).send("O formulário está vazio. Preencha as informações e tente novamente.")
        }
        const newSerie = { id: Math.floor(Date.now() * Math.random()).toString(34) }
        Object.assign(newSerie, req.body);
        const seriesKeys = Object.keys(seriesJson[0]);
        const newSerieKeys = Object.keys(newSerie);

        seriesKeys.forEach(key => {
            const verifyEach = newSerieKeys.find(newKey => newKey == key);
            if (!verifyEach) {
                throw new Error(`Campo "${key}" nao preenchido.`)
            }
        })

        seriesJson.push(newSerie)
        fs.writeFile('./src/series/models/series.json', JSON.stringify(seriesJson), 'utf-8', (err) => {
            if (err) {
                console.log(err)
                res.status(500).send('Arquivo não salvo pois ocorreu um erro');
            } else {
                res.status(200).json([{
                    message: "Série adicionada com sucesso!", newSerie
                }])
            }
        })

    } catch (error) {
        res.status(406).send(error.message)
    }
}

const deleteSerieByID = (req, res) => {
    const reqID = req.params.id;
    const index2Remove = seriesJson.findIndex(serie => serie.id == reqID);

    if (index2Remove == -1) {
        res.status(404).send("Série não encontrada!")
    } else {
        seriesJson.splice(index2Remove, 1);
        fs.writeFile('./src/series/models/series.json', JSON.stringify(seriesJson), 'utf-8', (err) => {
            if (err) {
                console.log(err)
                res.status(500).send('Arquivo não salvo pois ocorreu um erro');
            } else {
                res.status(200).json([{
                    message: "Série removida com sucesso! Séries disponíveis:", seriesJson
                }])
            }
        })

    }
}

const likeSerie = (req, res) => {
    const reqID = req.params.id;
    const selectedSerie = seriesJson.find(serie => serie.id == reqID);

    if (selectedSerie) {
        selectedSerie.liked = !(selectedSerie.liked);
        fs.writeFile('./src/series/models/series.json', JSON.stringify(seriesJson), 'utf-8', (err) => {
            if (err) {
                console.log(err)
                res.status(500).send('Arquivo não salvo pois ocorreu um erro');
            } else {
                res.status(200).json([{
                    message: "Série atualizada!", selectedSerie, seriesJson
                }])
            }
        })
        
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