const petsJson = require('../models/pets.json')
const fs = require ('fs')

const getAllPets = (req,res)=>{
    res.status(200).send([{
        petsJson

    }])
}

const getById = (req, res) =>{
    const idRequest = req.params.id
    const findId = petsJson.find (pet => pet.id == idRequest)
    if (findId){
        res.status(200).send(findId)

    }else{
        res.status(404).send([{
            message:"pet não encontrado"

        }
        ])
    }
}
const cadastro = (req, res) =>{
    const {id, nomeFantasia, endereço, telefone, atende} = req.body
    petsJson.push({id:(petsJson.length +1), nomeFantasia, endereço, telefone, atende})
    fs.writeFile("./src/models/pets.json", JSON.stringify(petsJson), "utf8", function(err){
        if (err){
            res.status(500).send({
                message : err
            })
        }else{
            console.log("Seus pets foram atualizados com sucesso!")
            const findPets = petsJson.find(pets => pets.id == id)
            res.status(200).send([{
                findPets, petsJson
            }])        }
    })
}

module.exports ={
    getAllPets,
    getById,
    cadastro
}
