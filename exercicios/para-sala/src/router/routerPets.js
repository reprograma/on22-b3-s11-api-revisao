const express = require("express")
const router = express.Router()

const ControllerPets = require('../controller/controllerPets')

router.get('/', ControllerPets.getAllPets)
router.get('/', ControllerPets.getById)
router.post('/')

module.exports = {
    router
}