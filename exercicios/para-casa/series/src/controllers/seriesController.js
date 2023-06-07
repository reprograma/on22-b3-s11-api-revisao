const seriesJson = require('../models/series.json')
const express = require('express')
const app = express()
app.use(express.json())

const getAll = (request, respose) => {
    respose.status(200).send([{
        'series': seriesJson 
    }])
}

const getByGenre = (request, response) => {
    const genre = request.query.genre
    const serie = seriesJson.find(series => series.genre === genre)
    if (serie) {
        response.status(200).send([{
            'message': 'Serie encontrada',
            'serie': serie            
        }])
    } else {
        response.status(404).send([{
            'message': 'Serie não encontrada'
        }])
    }
}

const getById = (request, response) => {
    const id = request.params.id
    const serie = seriesJson.find(serie => serie.id == id)
    if (serie) {
        response.status(200).send([{
            'message': 'Serie encontrada',
            serie
        }])
    } else {
        response.status(404).send([{
            'message': 'Serie não encontrada'
        }])
    }   
}

const postNewSerie = (request, response) => {
    let name = request.body.name
    let genre = request.body.genre
    let synopsis = request.body.synopsis
    let liked = request.body.liked

    let newSerie = {
        id: (seriesJson.length) + 1,
        name: name,
        genre: genre,
        synopsis: synopsis,
        liked: liked
    }

    seriesJson.push(newSerie)

    if (newSerie) {
        response.status(200).send([{
            'message': 'Serie foi cadastrada!',
            newSerie
        }])
    } else {
        response.status(404).send([{
            'message': 'Serie não cadastrada!'
        }])
    }   
}

const deleteSerieById = (request, response) => {
    const id = request.params.id
    const serie = seriesJson.findIndex(serie => serie.id == id)
    seriesJson.splice(serie, 1)
    response.status(200).send([{
        'message': 'serie deletada com sucesso!',
        seriesJson
    }])
}

const updateLikedById = (request, response) => {
    const id = request.params.id
    const liked = request.body.liked
    const serie = seriesJson.find(serie => serie.id == id)
    if(serie) {
        serie.liked = liked
        response.status(200).send([{
            'message': 'Liked atualizado',
            serie
        }])
    } else {
        response.status(404).send([{
            'message': 'Liked não foi atualizado.'
        }])
    }
}


module.exports = {
    getAll,
    getByGenre,
    getById, 
    postNewSerie,
    deleteSerieById,
    updateLikedById
}