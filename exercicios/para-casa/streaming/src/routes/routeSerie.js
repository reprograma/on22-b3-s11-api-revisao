const controllerSerie = require("../controllers/controllerSerie")
const express = require("express")
const router = express.Router()

router.get("/library", controllerSerie.getAllSerie);
router.get("/:id", controllerSerie.getIdSerie);
router.post("/cadastro", controllerSerie.cadastroSerie)
router.delete("/delete/:id", controllerSerie.deleteIdSerie)
router.patch("/updated/:id", controllerSerie.updateLikeSerie)


/* ok | `GET` | /series - Retorna todas series|
| `GET` | /series/genero - Retornar series de um genero específico|
ok| `GET` | /series/:id - Retornar apenas uma série específico |
ok| `POST` | /series - Cadastrar nova série |
| ok`DELETE` | /series/:id - Deletar uma série específica |
|ok `PATCH` | /series/:id/liked - Atualizar se gostou ou não da série.
*/
module.exports = router
