const express = require("express"); //importando o express, não é uma pasta ai chama direto

const app = express() //executando o express
app.use(express.json()) //usando o Body Parser

const gamesRouters = require("./Routers/gamesRouters") //importa a rota de games
app.use("/games", gamesRouters) //definiu a rota padrão de games

module.exports = app //exportando todo o app