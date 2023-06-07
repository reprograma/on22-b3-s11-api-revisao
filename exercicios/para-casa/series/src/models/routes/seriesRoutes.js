const seriesController = require("../controller/seriesController")
const express = require("express")
const router = express.Router()


router.get("/series", seriesController.getAllSeries)
router.get("/series/:id", seriesController.getSeriesByID)
router.get("/genero", seriesController.getGenero)
router.post("/series/add", seriesController.addSerie)
router.delete("/series/delete/:id", seriesController.deleteSerie)
router.patch("/update/:id/liked", seriesController.updateSeries)

/*|GET| /series - Retorna todas series|
  |GET| /series/genero - Retornar series de um genero específico|
  |GET| /series/:id - Retornar apenas uma série específico |
  |POST| /series - Cadastrar nova série |
  |DELETE| /series/:id - Deletar uma série específica |
  |PATCH| /series/:id/liked - Atualizar se gostou ou não da série. */

module.exports = router