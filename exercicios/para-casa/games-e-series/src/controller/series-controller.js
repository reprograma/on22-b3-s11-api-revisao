const seriesJson = require('../models/series.json')
const fs = require('fs')

const getAllSeries = (req, res) => {
    res.status(200).send([{
        seriesJson
    }])
}

const getSerieByGenre = (req, res) => {
    let genreRequest = req.query.genre
    let genreFilter = seriesJson.filter((serie) => {
        genreLowerCase = serie.genre.map((genreArray) => genreArray.toLowerCase())
        return genreLowerCase.includes(genreRequest)        
    })

    console.log(genreFilter);

    if (genreFilter.length > 0) {
        res.status(200).send(genreFilter)
    } else {
        res.status(404).send([{
            message: 'Genre not found!'
        }])
    }
}

const getSerieById = (req, res) => {
    const serieRequest = req.params.id
    const serieFilter = seriesJson.filter((serie) => serie.id == serieRequest)

    if (serieFilter.length > 0) {
        res.status(200).send(serieFilter)
    } else {
        res.status(404).send([{
            message: 'Serie not found!'
        }])
    }
}

const addSerie = (req, res) => {
    const {id, name, genre, consoles, synopsis, liked, seasons} = req.body
    seriesJson.push({id:(seriesJson.length +1), name, genre, synopsis, liked, seasons})
    fs.writeFile('./src/models/series.json', JSON.stringify(seriesJson), 'utf-8', function(err){
        if (err) {
            res.status(500).send({
                message: err
            })
        } else {
            console.log('Serie criada com sucesso')
            const findSerie = seriesJson.find(serie => serie.id == id)
            res.status(200).send([{
                findSerie,
                seriesJson
            }])
        }
    })
}

const deleteSerie = (req, res) => {
    const serieId = req.params.id
    const findSerie = seriesJson.findIndex((serie) => serie.id == serieId)

    seriesJson.splice(findSerie, 1)

    if (findSerie) {
        res.status(200).json([{
            message: 'A serie selecionado foi deletada com sucesso!',
            'serie deletada': serieId,
            seriesJson
        }])
    } else {
        res.status(404).send([{
            message: 'Serie não encontrada!'
        }])
    }
}


const updateLikedSerie = (req, res) => {
    const requestId = req.params.id
    const likedRequest = req.body.liked
    findLiked = seriesJson.find((serie) => serie.id == requestId)

    if (findLiked) {
        findLiked.liked = likedRequest
        res.status(200).json([{
            message: 'Liked da serie atualizada com sucesso!'
        }])
    } else {
        res.status(404).send([{
            message: 'A serie não foi encontrada!'
        }])
    }
}

module.exports = {
    getAllSeries,
    getSerieByGenre,
    getSerieById,
    addSerie,
    deleteSerie,
    updateLikedSerie
}