const reprogramaPets = require("../models/pets.json")
const fs = require("fs")

const getAllPets = (request, response) => {
    response.status(200).send([{
        reprogramaPets
    }])
}

const getPetsByID = (request, response) => {
    const idRequest = request.params.id
    const findId = reprogramaPets.find(pet => pet.id == idRequest)
    if (findId) {
        response.status(200).send(findId)
    } else {
        response.status(400).send([{
            message: "Pet não encontrado. Por favor, tente novamente."
        }])
    }
}

const cadastroDePets = (request, response) => {
    const {id, nomeFantasia, endereço, telefone, atende} = request.body
    reprogramaPets.push({id:(reprogramaPets.length +1), nomeFantasia, endereço, telefone, atende})
    fs.writeFile("./src/models/pets.json", JSON.stringify(reprogramaPets), "utf8", function(err) {
        if (err) {
            response.status(500).send({
                message: err
            })
        } else {
            console.log("Seus pets foram atualizados com sucesso.")
            const findPets = reprogramaPets.find(pets => pets.id == id)
            response.status(200).send([{
                findPets, reprogramaPets
            }])
        }
    })
}

module.exports = {
    getAllPets,
    getPetsByID,
    cadastroDePets

}