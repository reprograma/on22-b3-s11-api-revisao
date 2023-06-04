const petsJson = require("../models/pets.json");
const fs = require("fs");

const getAllPets = (_req, res) => {
	res.status(200).send(petsJson);
}

const getPetById = (req, res) => {
	const id = req.params.id;
	const petFound = petsJson.find(pet => pet.id == id);
	if(petFound){
		res.status(200).send(petFound);
	} else {
		res.status(404).send({ message: "Pet not found." });
	}
}

module.exports = {
	getAllPets,
	getPetById
}