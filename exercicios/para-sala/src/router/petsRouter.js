const express = require("express");
const router = express.Router(); 
const petsController = require("../controller/petsController");

router.get("/", petsController.getAllPets);
router.get("/:id", petsController.getById);
router.post("/cadastro", petsController.cadastro )

module.exports = router