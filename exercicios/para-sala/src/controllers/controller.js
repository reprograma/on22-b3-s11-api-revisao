const petsJson = require('../models/pets.json')

const fs = require('fs')

const getAllPets = (req,res) =>{
    res.status(200).json([{
        petsJson
    }])
}

const getById = (req,res)=>{
    const idRequest = req.params.id 
    const idfound = petsJson.find((pet)=> pet.id == idRequest)
    if(idfound){
        res.status(200).json([{
            message: idfound
        }])
    } else {
        res.status(404).send([{
            message: 'Not found'
        }])
    }
}

const updateList = (req,res)=>{
    /**const namePet = req.body.nomeFantasia
    const enderecoPet = req.body.endereco
    const telefonePet = req.body.telefone
    const atendePet = req.body.atende

    const newPet = {
        id: {},
        nomeFantasia: namePet,
        endereco: enderecoPet,
        telefone: telefonePet,
        atende: atendePet
    }*/

    const {id, nomeFantasia, endereco, telefone, atende} = req.body
    petsJson.push({id:(petsJson.length +1), nomeFantasia, endereco, telefone, atende})

    fs.writeFile('./src/models/pets.json', JSON.stringify(petsJson), 'utf-8',function(err){
        if(err){
            res.status(500).send([{
                message: err
            }])
        } else {
            console.log('Successfully updated')
            const petFound = petsJson.find((pet)=> pet.id == id)
            res.status(200).send([{
                petFound
            }])
        }
    })
}


module.exports = {
    getAllPets,
    getById,
    updateList,
}