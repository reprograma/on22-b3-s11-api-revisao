const express = require("express") //Importamos o módulo express e criamos um novo objeto de roteador usando express.Router().
const router = express.Router() //Importamos o controlador petsController que contém as funções de manipulação das rotas.
const controller = require("../controller/petsController")

//Definimos várias rotas utilizando os métodos correspondentes no objeto de roteador:

router.post("/", controller.createPet) //para a rota de criação (POST).

router.delete("/:id", controller.deletePet) //para a rota de remoção (DELETE), que inclui um parâmetro de ID na URL.

router.put("/:id", controller.updatePet) //para a rota de atualização (PUT), que também inclui um parâmetro de ID na URL.
router.patch("/:id/name", controller.updateName) //para a rota de atualização parcial (PATCH), que atualiza apenas o nome do pet.

router.get("/", controller.getAllPets) //para a rota de recuperação de todos os pets.
router.get("/atende", controller.getPetByAtendende) //para a rota de recuperação de pets por atendente.
router.get("/:id", controller.getPet) //para a rota de recuperação de um pet específico, que também inclui um parâmetro de ID na URL.

module.exports = router; //Exportamos o objeto de roteador para ser utilizado no aplicativo Express.


/* Em resumo, esse código define as rotas do aplicativo usando o Router do Express e associa cada rota a uma
função de controle correspondente no petsController. Essas rotas incluem operações de criação, remoção,
atualização e recuperação de pets.*/