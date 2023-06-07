const petsJson = require('../models/pets.json');
const fs = require('fs');

const getAllPets = (req, res) => {
    res.status(200).send(petsJson);
}

const getPetByID = (req, res) => {
    try {
        const reqID = req.params.id;
        const foundPet = petsJson.find(pet => pet.id == reqID);
        if (foundPet) {
            res.status(200).sind(foundPet)
        } else {
            throw new Error("ID não encontrado")
        }
    }
    catch(err) {
        console.error(err.message);
    }
}



module.exports = {
    getAllPets,
    getPetByID
}
