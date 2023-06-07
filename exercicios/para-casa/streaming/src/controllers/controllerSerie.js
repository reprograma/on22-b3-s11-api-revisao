const seriesJson = require("../models/series.json")
const fs = require("fs") 


const getAllSerie = (req, res) =>{
    try{
        console.log("Series é visualizada com sucesso.")
        res.status(200).json([{
            Serie: seriesJson
        }])
    } catch(err){
        console.log("erro no server, series não podem ser visualizadas.")
        res.status(500).send([{
            messagem:"erro no server"
        }])
    }
}

const getIdSerie = (req, res) =>{
    const idRequest = req.params.id
    const findId = seriesJson.find(serie => serie.id == idRequest)
    if(findId){
        console.log("Series é visualizada com sucesso.")
        res.status(200).send(findId)
    }else{
        console.log("erro no serve, series não podem ser visualizadas.")
        res.status(404).send([{
            message: "not found serie"
        }])
    }
}

const cadastroSerie = (req, res) =>{
    const { id, name, genero, consoles, synopsis, liked, seasons,} = req.body
    seriesJson.push({id:(seriesJson.length +1),name, genero, consoles, synopsis, liked, seasons,}) 
    fs.writeFile("./streaming/src/models/series.json", JSON.stringify(seriesJson), "utf8", function(err){
        if(err){
            console.log("erro, sua serie não foi cadastrada. Tente novamente!")
            res.status(500).send({
                message: err
            })
        }else{
            console.log("A serie foi cadastrada com sucesso.")
            const findSeries = seriesJson.find(series => series.id == id)
            res.status(200).send([{
                findSeries, seriesJson
            }])
        }
    })
} 

const deleteIdSerie = (req, res) =>{
    const idRequest = req.params.id
    const seriesFilter = seriesJson.findIndex((serie) => serie.id == idRequest)
    seriesJson.splice(seriesFilter, 1)
    if(seriesFilter){
        console.log("a serie foi deletada com sucesso.")
        res.status(200).json([{
            message: "a serie selecionada foi deletada com sucesso",
             "serie deletada": idRequest,
              seriesJson 
        }])
    } else {
        console.log("Erro, a serie selecionada não foi deletado. tente novamente!")
        res.status(404).send([{
            message: "erro! a serie selecionada não foi deletada."
        }])
    }
}
    
    const updateLikeSerie = (req, res) =>{
    const idRequest = req.params.id
    const updateRequest = req.body.liked
     findUpdate = seriesJson.find((serie) => serie.id == idRequest)
    if(findUpdate){
        console.log("serie foi atualizado com sucesso.")
        findUpdate.liked = updateRequest,
        res.status(200).json([{
            message: "Liked atualizado com sucesso."
        }])
    }else{
        console.log("Erro, seu liked não foi atualizado. Tente novamente!")

        res.status(404).json([{
            message: "not found serie"
        }])
    }
}






module.exports = {
    getAllSerie,
    getIdSerie,
    cadastroSerie,
    deleteIdSerie,
    updateLikeSerie
}