const petsJson = require("../models/pets.json"); 
const fs = require("fs"); //interage com arqs do computador

const getAllPets = (req, res) => {
    res.status(200).send([{
        petsJson
    }])
}

const getById = (req, res) => {
    const idRequest = req.params.id;
    const findId = petsJson.find(pet => pet.id == idRequest) 
    
    if (findId) {
        res.status(200).send(findId)
    } else {
        res.status(404).send([{
            message: "not found pet"
        }])
    }
}

const add = (req, res) => {
    const addPet = 
    {id, nomePet, endereco, telefone, atende} = req.body
    petsJson.push({id:(petsJson.length + 1), nomeFantasia,
        endereco, telefone, atende})

        fs.watchFile("./src/models/pets.Json", JSON.stringify(petsJson), "utf-8", function(err) {
            if (err) {
                res.status(500).send([{
                    message: err
                }])
            } else {
                console.log("pets atualizado com sucesso")
                const findPets = petsJson.find(pets => pets.id == id)
              res.status(200).send([{
                findPets, petsJson
              }])
            }
        })

}

module.exports = {
    getAllPets,
    getById,
    add,
}