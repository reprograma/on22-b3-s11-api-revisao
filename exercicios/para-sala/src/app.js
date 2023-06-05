const express = require ("express"); //importa o express
const app = express(); //executando o express

app.use(express.json()); //usando o bodyParser

//rotas padrões
const petsRoutes = require("./router/petsRoutes") //importa as rotas dos pets
app.use("/pets", petsRoutes) //importa a rota com os pets


module.exports = app;
