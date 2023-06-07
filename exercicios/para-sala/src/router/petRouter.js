const express = require("express");
const router = express.Router();

const petController = require("../controller/petController")

router.get("/", petController.getAllPets)
router.get("/:id", petController.getPetById)
router.post("/create", petController.postNewPet)

module.exports = router
