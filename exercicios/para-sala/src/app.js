const express = require("express");
const app = express(); //executando o express
const routerPets = require("./router/petsRouter");

app.use(express.json()); //usando o bodyParser
app.use("/pets", routerPets);

module.exports = app;