const petsController = require("../controller/petsController"); 
const express = require("express");

const router = express.Router();


router.get("/", petsController.getAllPets)
router.get("/:id", petsController.getById)
router.post("/cadastra", petsController.add)

module.exports = router;

