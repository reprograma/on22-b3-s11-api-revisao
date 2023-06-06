const express = require('express');
const { getAllPets, getPetByID } = require('../controller/controllerPets');
const router = express.Router();



router.get('/all', getAllPets);

router.get('/pet/:id', getPetByID);


module.exports = router;