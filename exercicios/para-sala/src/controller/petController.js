const petsJson = require("../models/pets.json");
const fs = require("fs")

const getAllPets = (req, res) => {
    res.status(200).send([{
        "pets": petsJson
    }])
    
}

const getPetById = (req, res) => {
    const idRequest = req.params.id
    const findId = petsJson.find(pet => pet.id == idRequest)
    if (findId) {
        res.status(200).send(findId)
    }else {
        res.status(404).send([{
            message: "Pet não foi encontrado :("
        }])
    }
}

const postNewPet = (req, res) => {
    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    petsJson.push({id:(petsJson.length + 1), nomeFantasia, endereco, telefone, atende})
    fs.writeFile("./src/models/petsJson", JSON.stringify(petsJson),"utf8",function(err){
        if(err) {
            res.status(500).send({
                message: err
            })
        }else{
            console.log("Pets atualizado com sucesso!! :)")
            const findPet = petsJson.find(pet => pet.id == id)
            res.status(200).send([{
                findPet
            }])
        }
    })
}

module.exports = {
    getAllPets,
    getPetById,
    postNewPet,
}