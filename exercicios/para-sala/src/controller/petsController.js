const petsJson = require("../models/pets.json")
const fs = require("fs")

const getAllPets = (req, res) =>{
    try {
        res.status(200).send([{
            pets : petsJson
        }])
    } catch (error) {
        res.status(500).send([{
            message : 'erro no server'
        }])
    }
}

const getById = (req, res) =>{
    const idRequest = req.params.id
    const findId = petsJson.find(pet => pet.id == idRequest)
    if(findId){
        res.status(200).send(findId)
    }else{
        res.status(404).send([{
            message : 'não encontrado'
        }])
    }
}

const createPets = (req, res) =>{
    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    petsJson.push({id:(petsJson.length +1), nomeFantasia, endereco, telefone, atende})
    fs.writeFile("./src/models/pets.json", JSON.stringify(petsJson), "utf8", function(err){
        if(err){
            res.status(500).send([{
                message : err
            }])
        }else{
            console.log("arquivo atualizado com sucesso")
            const findPets = petsJson.find(pets => pets.id == id)
            res.status(200).send(findPets)
        }
    })
}

module.exports = {
    getAllPets,
    getById,
    createPets
}