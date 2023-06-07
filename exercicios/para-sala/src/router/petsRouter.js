const express = require("express")
const router = express.Router()
const ControllerPets = require("../controller/petsController")

router.get("/", ControllerPets.getAllPets)
router.get("/:id", ControllerPets.getById)
router.post("/create", ControllerPets.createPets)

module.exports = router
