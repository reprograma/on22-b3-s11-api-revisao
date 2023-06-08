const seriesJson = require('../models/series.json')
const fileSystem = require("fs")  // não leva ponto pois é uma biblioteca do node.

const getAllSeries = (require, response) => {
    response.status(200).send([{
        seriesJson
    }])
}

const getByGender = (require, response) => {
    const genderRequest = require.params.genre
    const findGender = seriesJson.find(serie => serie.genre == genderRequest)
    if (findGender){
        response.status(200).send(findGender)

    }else{
        response.status(404).send([{
            message: "not found serie by gender"
        }])
    }
}

const getByID = (require, response) => {
    const idRequest = require.params.id
    const findId = seriesJson.find(serie => serie.id == idRequest)
    if(findId){
        response.status(200).send(findId)
    }else{
        response.status(404).send([{
            message: "not found serie."
        }])
    }
}

const cadastro = (require, response) => {
    const {id, nome, genre, synopsis, liked, seasons} = require.body
    seriesJson.push({id:(seriesJson.length + 1), nome, genre, synopsis, liked, seasons})
    fileSystem.writeFile("./src/models/series.json", JSON.stringify(seriesJson), "utf8", function(err){
        if(err){
            response.status(500).send({
                message: err
            })
        }else{
            console.log("your serie update success")
            const findSeries = seriesJson.find(series => serie.id = id)
            response.status(200).send([{
                findSeries
            }])
        }
    })
}

const deleteSerie = (require, response) => {
    const idRequest = require.params.id
    const findSerie = seriesJson.findIndex(serie => serie.id == idRequest)

    seriesJson.splice(findSerie, 1)

    if (findSerie) {
        response.status(200).json([{
            message: 'A serie selecionada foi deletada.',
            'serie deletada': idRequest,
            seriesJson
        }])
    }else{
        response.status(404).send([{
            message: 'Música não deletada.'
        }])

    }
}

const updateLiked = (require, response) => {
    const idRequest = require.params.id
    const likedRequest = require.body.liked
    likedFind = seriesJson.find(serie => serie.id == idRequest)

    if (likedFind){
        likedFind.liked = likedRequest,
        response.status(200).json([{
            message: "Classificação atualizada com sucesso!!"
        }])
    }else{
        response.status(404).json([{
            message: "nao"
        }])
    }

}

module.exports = {
    getAllSeries,
    getByGender,
    getByID,
    cadastro,
    deleteSerie,
    updateLiked
}