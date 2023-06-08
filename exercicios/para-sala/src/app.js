const express = require("express")  // importando o express

const routerPets = require("./router/routerPets")

const app = express()  // executando o express

app.use(express.json())  // usando o BodyParser
app.use('/pets', routerPets)

module.exports = app;