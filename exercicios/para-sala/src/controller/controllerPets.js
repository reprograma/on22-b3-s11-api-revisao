const petsJson = require("/src/models/pets.js")
const fs = require("../")

const getAllPets = (req, res) => {
    res.status(200).send([{
        petsJson
    }])
}

const getById = (req, res) => {
    const idRequset = res.params.id
    const findId = petsJson.find(pet => pet.id == idRequset)
    if(findId){
        res.status(200).send(findId)
    } else{
        res.status(404).send([{
            message: "não achei"
        }])
    }
}

const novo = (req, res) => {
    const { id, nomeFantasia, endereco, telefone, atende } = req.body
    petsJson.push({id:(petsJson.lenght +1), nomeFantasia, endereco, telefone, atende})
    fs.writeFile("./src/models/pets.json", JSON.stringify(petsJson), "utf8", function(error){
        if(error){
            res.status(500).send({
                message: error
            })
        }else {
            console.log("novo arquivo feito")
            const findPets = petsJson.find(pets => pets.id == id)
            res.status(200).send
                findPets
        }
    })
}




module.exports = {
    getAllPets,
    getById,
    novo,
}
