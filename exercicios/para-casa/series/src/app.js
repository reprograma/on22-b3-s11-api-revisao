const express = require("express"); //importando o express
const app = express(); //executando o express

app.use(express.json()) //uso o bodyparse

//definindo rotas padrão
const seriesRoutes = require("./routes/seriesRoutes") //importa as rotas de series
app.use("/series", seriesRoutes) //definindo a rota padrão para series

module.exports = app;