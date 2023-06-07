const express = require("express")
const router = express.Router()

const controllerPets = require("../controller/controllerPets")

router.get("/", controllerPets.getAllPets)
router.get("/:id", controllerPets.getById)
router.post("/cadastro", controllerPets.cadastro)
router.patch("/update/:id", controllerPets.updateById)
router.put("/updated/:id", controllerPets.updatePetsId)
router.delete("/delete/:id", controllerPets.deleteById)


module.exports = router
