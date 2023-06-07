const express = require("express")
const router = express.Router()

const petsController = require("../controller/petsController")

router.get("/catalogo", petsController.getAllPets)
router.get("/:id", petsController.getPetsByID)
router.post("/cadastro", petsController.cadastroDePets)

module.exports = router

