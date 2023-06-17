const seriesJson = require("../models/series.json")
const fs = require("fs")
const getAllSeries = (req,res) => {
        try{
        res.status(200).json([{
            series : seriesJson
        }])
    }catch (error) {
        res.status(500).send([{
            messege : "Erro no server"
        }])
    }
}

const getSeriesByID = (req,res)=>{
      const seriesRequest = req.params.id
     const seriesFilter = seriesJson.filter(serie=> serie.id == seriesRequest)
      if(seriesFilter.length>o){
        res.status(200).send (seriesFilter)
        { else {
            res.status(404).send([{
                messege: "Não foi encontrado"
            }])
      }
    }
    const getGenero = (req,res)=>{
            let genreReq = req.query.genre.toLowerCase();
            let genreFilter = seriesJson.filter((series) =>{
                if(Array.isArray(series.genre)){
            let genretoLowerCase = series.genre.map((genreArray) => genreArray.toLowerCase());
            return genretoLowerCase.includes(genreRequest);
                }
                let genreLowercase = series.genre.toLowerCase();
                return genreLowerCase === genreRequest;
            });
            console.log(genreFilter);
            
            if(genreFilter .length >0) {
                res.status(200).send(genreFilter);
            } else {
                res.status(404).send ([{
                    messege: "Gênero não encontrado"
                }]);
            }
        };
        const addSeries = (req,res) => {
            try{
                let seriesToAdd;
                if (Array.isArray(req.body)) {
                    seriesToAdd = req.body;
                } else {
                    seriesToAdd = [req.body]
                }
        
                seriesToAdd.forEach((serie) => {
                    seriesJson.push(serie)
                });
        
                if (seriesToAdd.length > 0) {
                    rep.status(201).json({
                        message: "Nova série cadastrada",
                        addedSeries: seriesToAdd
                    })
                } else {
                    resp.status(400).json({
                        message: "Nenhuma série foi cadastrada"
                    })
                }
            } catch (error) {
                console.log(error)
                resp.status(500).json({
                    message: "Erro interno ao cadastrar a série. Por favor, tente novamente."
                })
            }
        }
        
        
        const deleteSerie = (req, res) => {
            const idRequest = req.params.id 
            const findSerieIndex = seriesJson.findIndex((serie) => serie.id == idRequest)
        
            if (findSerieIndex !== -1) {
                const deletedSerie = seriesJson.splice(findSerieIndex, 1)[0];
                resp.status(200).json({
                    message: "A série selecionada foi deletada.",
                    "Série deletada": deletedSerie
                })
            } else {
                resp.status(404).json({
                    message: "Essa série já foi deletada."
                })
            }
        }
        
        const updateSeries = (req, res) => {
            const idReq = req.params.id
            const likedReq = req.body.liked
            const seriesToUpdate = seriesJson.find((serie) => serie.id == idRequest)
        
            if (seriesToUpdate) {
                seriesToUpdate.liked = likedReq
                res.status(200).json({
                    message: "Série atualizada com sucesso.",
                    updatedSeries: seriesToUpdate
                })
            } else {
                res.status(404).json({
                    message: "Série não encontrada."
                })
            }
        }
        
        
        module.exports = {
            getAllSeries,
            getSeriesByID,
            getGenero,
            addSerie,
            deleteSerie,
            updateSeries,
        
        }
     