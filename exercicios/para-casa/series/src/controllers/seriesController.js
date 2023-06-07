const seriesJson = require('../models/series.json')

const fs = require('fs')

const getAllSeries = (req,res)=>{
    res.status(200).json([{
        seriesJson
    }])
}

const getByGenre = (req,res)=>{
    let findSeries = []
    const genreRequest = req.params.genre.toLocaleLowerCase()
    findSeries = seriesJson.filter((series)=> series.genre.toLocaleLowerCase().includes(genreRequest))

    if(findSeries.length>0){
        res.status(200).json([{
            message: findSeries
        }])
    } else {
        res.status(404).json([{
            message: 'Not found'
        }])
    }
}

const getById = (req,res)=>{
    const idRequest = req.params.id 
    const seriesFound = seriesJson.find((series)=> series.id == idRequest)

    if(seriesFound){
        res.status(200).json([{
            message: seriesFound
        }])
    } else {
        res.status(404).json([{
            message: 'Not found'
        }])    }
}

const addNewSeries = (req,res)=>{
    const {id, name, genre, synopsis, liked, seasons} = req.body
    seriesJson.push({id:(seriesJson.lenght+1), name, genre, synopsis, liked, seasons})

    fs.writeFile('./src/models/series.json', JSON.stringify(seriesJson), 'utf-8', function(err){
        if(err){
            res.status(500).json([{
                message: err
            }])
        } else {
            console.log('Successfully updated')
            const seriesFound = seriesJson.find((series)=> series.id == id)
            res.status(200).send([{
                seriesFound
            }])
        }
    })
}

const deleteById = (req,res)=>{
    const idRequest = req.params.id 
    const deleteSeries = seriesJson.find((series)=> series.id == idRequest)

    seriesJson.splice(deleteSeries, 1)

    if(deleteSeries){
        res.status(200).json([{
            message: 'Series deleted',
            'series': idRequest,
            seriesJson
        }])
    } else {
        res.status(404).json([{
            message: 'Not found'
        }])
    }

}

const likedById = (req,res)=>{
    const idRequest = req.params.id 
    let newStatusLiked = req.body.liked
    let findSeries = seriesJson.find((series)=> series.id == idRequest)

    findSeries.liked = newStatusLiked

    if(findSeries){
        res.status(200).json([{
            message: 'Status updated',
            findSeries
        }])
    } else {
        res.status(404).json([{
            message: 'Not found'
        }])
    }

}


module.exports = {
    getAllSeries,
    getByGenre,
    getById,
    addNewSeries,
    deleteById,
    likedById
}