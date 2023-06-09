const seriesJson = require("../models/series.json");

const getAllSeries = (req, res) => {
    try {
        res.status(200).json([{
            series: seriesJson
        }])
    } catch (error) {
        res.status(500).send([{
            message: "erro no server"
        }])
    }
}

const getGenre = (req, res) => {
    const genreRequest = req.query.genre;
    const genreFilter = seriesJson.filter((genre) => genre.genre.includes(genreRequest))
    if (genreFilter.length > 0) {
        res.status(200).send(genreFilter)

    } else {
        res.status(404).send([{
            message: "series not found"
        }])
    }
}

const getById = (req, res) => {
    const serieRequest = req.params.id 
    const seriesFilter = seriesJson.filter(serie => serie.id == serieRequest)

    if (seriesFilter) {
        res.status(200).send(seriesFilter)
    } else {
        res.status(404).send([{
            message: "not found"
        }])
    }
}   

const addSeries = (req, res) => {
    try {
    let nameRequest = req.body.name;
    let genreRequest = req.body.genre;
    let synopsisRequest = req.body.synopsis;
    let likedRequest = req.body.liked;
    let seasonsRequest = req.body.seasons;

    let newSerie = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: nameRequest,
        genre: genreRequest,
        synopsis: synopsisRequest,
        liked: likedRequest,
        seasons: seasonsRequest,
    };
    seriesJson.push(newSerie)
    res.status(201).json([{
        message: "nova série cadastrada",
        newSerie
    }])
    
    } catch (error) {
        console.log(error)
        res.status(500).send([{
            message: "erro interno ao cadastrar"
        }])   
    }
}

const deleteSeries = (req, res) => {
    const idRequest = req.params.id;
    const findSerie = seriesJson.findIndex((serie) => serie.id == idRequest)

    seriesJson.splice(findSerie, 1)

    if (findSerie) {
        res.status(200).json([{
            message: "a série selecionada foi deletada",
            "série deletada": idRequest,
            seriesJson,
        }])
    } else {
        res.status(404).send([{
            message: "série não deletada"
        }])
    }
}

const updateLike = (req, res) => {
    const idRequest = req.params.id;
    const favoritedRequest = req.body.favorited;
    favoritedFind = seriesJson.find((serie) => serie.id == idRequest)

    if (favoritedFind) {
        favoritedFind.favorited = favoritedRequest
        res.status(200).json([{
            message: "classificação foi atualizada"
        }])
    } else {
        res.status(404).json([{
            message: "não alterou, infeeeeeerno"
        }])
    }
}

module.exports = {
    getAllSeries,
    getGenre,
    getById,
    addSeries,
    deleteSeries,
    updateLike,
}