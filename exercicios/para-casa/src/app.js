const express = require("express")
const app = express()
app.use(express.json())

//importando as rotas
const gamesRoutes = require("./routes/gamesRoutes")
//const seriesRoutes = require("./routes/seriesRoutes")

//criando rota padrao
app.use("/games",gamesRoutes)
//app.use("/series",seriesRoutes)


module.exports= app