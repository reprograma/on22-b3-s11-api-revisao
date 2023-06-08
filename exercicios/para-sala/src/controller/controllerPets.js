const petsJson = require('../models/pets')
const fs = require("fs")

const getAllPets = (require, response) => {
response.status(200).send([{
    petsJson
}])
}

const getByID = (require, response) => {
    const idPet = request.params.id
    const findId = petsJson.find(pet => pet.id == idPet)
    if(findId){
        response.status(200).send(findId)
    }else{
        response.status(404).send([{
            message: "not found pet"
        }])
    }
}

const cadastro = (require, response) => {
    const {id, nomeFantasia, endereco, telefone, atende} = require.body
    petsJson.push({id:(petsJson.length +1), nomeFantasia, endereco, telefone, atende})
    fs.writeFile('./src/models/pets.json', JSON.stringify(petsJson), "utf8", function(err){
        if(err){
            response.status(500).send({
                message: err
            })
        }else{
            console.log("your pets update success.")
            const findPets = petsJson.find(pets => pets.id = id)
            response.status(200).send([{
                
            }])
        }
    })
}




module.exports = {
    getAllPets,
    getById,
    cadastro
}