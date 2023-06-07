const petsJson = require('../models/pets.json')
const fs = require('fs')

const getAllPets = (req, res) => {
    res.status(200).send([{
        'pets': petsJson
    }])
}

const getById = (req, res) =>{
    const idReq = req.params.id
    const findId = petsJson.find(pet => pet.id == idReq)
    if(findId){
        res.status(200).send(find)
    } else {
        res.status(404).send([{
            message: 'pet não encontradi'
        }])
    }
}

const cadastro = (req, res) =>{
    const {id,nomeFantasia , endereço, telefone, atende} = req.body
    petsJson.push({id: (petsJson.length +1),nomeFantasia , endereço, telefone, atende})
    fs.writeFile("./src/models/pets.json", json.stringify(petsJson), "utf8", function(err){
        if(err){
            res.status(500).send({
                message: err
            })
        } else {
            console.log('seus pets foram atualizados com sucesso!')
            const findPets = petsJson.find(pets => pets.id == id)
            res.status(200).send([{
                findPets, petsJson
            }])
        }
    })
}

module.exports = {
    getAllPets, getById, cadastro
}