const express = require("express")
const router = express.Router()

const controller = require("../controller/controllerPets")

router.get("/", controllerPets.getAllPets)
router.get("/:id", controllerPets.getById)
router.post("/novo", controllerPets.novo)

module.exports = router