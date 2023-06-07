const seriesReprograma = require("../models/series.json")
const fs = require("fs")

const getAllSeries = (request, response) => {
    try {
        response.status(200).json([{
            series: seriesReprograma
        }])
    } catch (error) {
        response.status(500).send([{
            message: "Erro no server."
        }])
    }
}

const getSeriesByID = (request, response) => {
    const seriesRequest = request.params.id
    const seriesFilter = seriesReprograma.filter(serie => serie.id == seriesRequest)

    if(seriesFilter.length > 0) {
        response.status(200).send(seriesFilter)
    } else {
        response.status(404).send([{
            message: "Não foi encontrado."
        }])
    }
}

const getGenero = (request, response) => {
    let genreRequest = request.query.genre.toLowerCase();
    let genreFilter = seriesReprograma.filter((series) => {
        if (Array.isArray(series.genre)) {
            let genreLowerCase = series.genre.map((genreArray) => genreArray.toLowerCase());
            return genreLowerCase.includes(genreRequest);
        }
        let genreLowerCase = series.genre.toLowerCase();
        return genreLowerCase === genreRequest;
    });

    console.log(genreFilter);

    if (genreFilter.length > 0) {
        response.status(200).send(genreFilter);
    } else {
        response.status(404).send([{
            message: "Gênero não encontrado."
        }]);
    }
};


const addSerie = (request, response) => {
    try {
        let seriesToAdd;
        if (Array.isArray(request.body)) {
            seriesToAdd = request.body;
        } else {
            seriesToAdd = [request.body]
        }

        seriesToAdd.forEach((serie) => {
            seriesReprograma.push(serie)
        });

        if (seriesToAdd.length > 0) {
            response.status(201).json({
                message: "Nova série cadastrada",
                addedSeries: seriesToAdd
            })
        } else {
            response.status(400).json({
                message: "Nenhuma série foi cadastrada"
            })
        }
    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: "Erro interno ao cadastrar a série. Por favor, tente novamente."
        })
    }
}


const deleteSerie = (request, response) => {
    const idRequest = request.params.id 
    const findSerieIndex = seriesReprograma.findIndex((serie) => serie.id == idRequest)
    
    if (findSerieIndex !== -1) {
        const deletedSerie = seriesReprograma.splice(findSerieIndex, 1)[0];
        response.status(200).json({
            message: "A série selecionada foi deletada.",
            "Série deletada": deletedSerie
        })
    } else {
        response.status(404).json({
            message: "Essa série já foi deletada."
        })
    }
}

const updateSeries = (request, response) => {
    const idRequest = request.params.id
    const likedRequest = request.body.liked
    const seriesToUpdate = seriesReprograma.find((serie) => serie.id == idRequest)

    if (seriesToUpdate) {
        seriesToUpdate.liked = likedRequest
        response.status(200).json({
            message: "Série atualizada com sucesso.",
            updatedSeries: seriesToUpdate
        })
    } else {
        response.status(404).json({
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