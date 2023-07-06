const express = require("express") 
const router = express.Router() 
const controller = require("../controller/petsController")


router.post("/", controller.createPet) 

router.delete("/:id", controller.deletePet) 

router.put("/:id", controller.updatePet) 
router.patch("/:id/name", controller.updateName) 

router.get("/", controller.getAllPets) 
router.get("/atende", controller.getPetByAtendende) 
router.get("/:id", controller.getPet) 

module.exports = router 