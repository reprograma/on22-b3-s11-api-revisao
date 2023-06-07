const express = require ("express")
const Router = express.Router()

const petsController = require ("../controller/petsController")

Router.get("/", petsController.getAllPets)
Router.get("/:id", petsController.getById)
Router.post('/cadastro', petsController.cadastro)
module.exports= Router