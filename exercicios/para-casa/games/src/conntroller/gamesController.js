const gamesJson = require('../models/games.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (req, res) => {
    res.status(200).json([{
        games: gamesJson
    }])
}

const gamesById = (req, res) => {
    const idReq = req.params.id
    const gamesId = gamesJson.find(games => games.id == idReq)
    res.status(200).json([{
        message: 'game encontrado garotah', gamesId
    }])
}

const addPost = (req, res) => {
    try {
        let titleReq = req.body.title
        let launchYearReq = req.body.launchYear
        let consolesReq = req.body.consoles
        let likedReq = req.body.like

        let newGames = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            title: titleReq,
            launchYear: launchYearReq,
            console: consolesReq,
            like: likedReq
        }

        gamesJson.push(newGames)
        res.status(200).json([{
            message: 'novo game cadastrado', gamesJson
        }])
    } catch (error) {
        console.log(error)
        res.status(500).json([{
            message: 'erro interno ao cadastrar'
        }])
    }
}

const updateById = (req, res) => {
    const idReq = req.params.id
    const updateReq = req.body
    const updateNovo = gamesJson.findIndex(games => games.id == idReq)
    gamesJson.splice(updateNovo, 1 , updateReq)
    res.status(200).json([{
        'message': 'descrição atualizada', 'descrição': updateReq
    }])
}

const deleteById = (req, res) => {
    const idReq = req.params.id
    const deletePost = gamesJson.findIndex((games) => games.id == idReq)

    gamesJson.splice(deletePost, 1)

    if (deletePost) {
        res.status(200).json([{
            message: 'game deletado bb', 'game deletado': idReq, deletePost
        }])
    } else {
        res.status(404).send([{
            message: 'game não deletado'
        }])
    }
}

const updateFav = (req, res) => {
    const idReq = req.params.id
    const likedReq = req.body.liked 
    likedFind = gamesJson.find((games) => games.id == idReq)

    if (likedFind) {
        likedFind.like = likedReq
        res.status(200).json([{
            message: 'classificação atualizada com sucesso'
        }])
    } else {
        res.status(400).json([{
            message: 'não quero hj'
        }])
    }

}

module.exports = {
    getAll, gamesById, addPost, updateById, deleteById, updateFav
}