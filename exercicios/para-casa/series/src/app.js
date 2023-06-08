const express = require("express")  // importando o express

const routerSeries = require("./router/routerSeries")

const app = express()  // executando o express

app.use(express.json())  // usando o BodyParser
app.use('/series', routerSeries)

module.exports = app;