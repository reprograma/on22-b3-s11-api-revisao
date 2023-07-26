const petsJson = require('../models/pets.json')
const fs = require("fs") 

const getAllPets = (req, res) =>{
res.status(200).send([{
    petsJson 
}]) 

}

const getById = (req, res) =>{
    const idRequest = req.params.id
    const findId = petsJson.find(pet => pet.id == idRequest)
    if(findId){
        res.status(200).send(findId)
    }else{
        res.status(404).send([{
            message: "not found pet"
        }])
    }
}

const cadastro = (req, res) =>{
    const { id, nomeFantasia, endereco, telefone, atende} = req.body
    petsJson.push({id:(petsJson.length +1),nomeFantasia, endereco, telefone, atende}) 
    fs.writeFile("./src/models/pets.json", JSON.stringify(petsJson), "utf8", function(err){
        if(err){
            res.status(500).send({
                message: err
            })
        }else{
            console.log("your pets update sucess.")
            const findPets = petsJson.find(pets => pets.id == id)
            res.status(200).send([{
                findPets, petsJson
            }])
        }
    })
} 

const updateById = (req, res) =>{
    const idRequest = req.params.id
    const updateRequest = req.body.nomeFantasia
     findUpdate = petsJson.find((pets) => pets.id == idRequest)
    if(findUpdate){
        findUpdate.nomeFantasia = updateRequest,
        res.status(200).json([{
            message: "nome Fantasia atualizado com sucesso."
        }])
    }else{
        res.status(404).json([{
            message: "not found name"
        }])
    }
}
const updatePetsId = (req, res) =>{
    const idRequest = req.params.id
    let petRequest = req.body
    let findPets = petsJson.findIndex((pet) => pet.id == idRequest)
    if (petsJson.splice(findPets, 1, petRequest)) {
        res.status(200).json([{
            message: "pet atualizado com sucesso", petsJson
        }])
    } else {
        res.status(404).send([{
            message: 'Pet não encontrado!'
            }])
    }
} 
const deleteById = (req, res) =>{
    const idRequest = req.params.id
    const petsFilter = petsJson.findIndex((pet) => pet.id == idRequest)
    petsJson.splice(petsFilter, 1)
    if(petsFilter){
        res.status(200).json([{
            message: "O pet selecionado foi deletado com sucesso",
             "pet deletado": idRequest,
              petsJson 
        }])
    } else {
        res.status(404).send([{
            message: "erro! o pet selecionado não foi deletado."
        }])
    }
}



module.exports = {
getAllPets,
getById,
cadastro,
updateById,
updatePetsId,
deleteById
}
 
