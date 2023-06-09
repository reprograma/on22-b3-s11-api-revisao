
const express = require ("express"); //importa o express
const app = express(); //executando o express

app.use(express.json()); //usando o bodyParser

//rotas padrões
const petsRoutes = require("./router/petsRoutes") //importa as rotas dos pets
app.use("/pets", petsRoutes) //importa a rota com os pets


module.exports = app;

const express = require("express") //Importamos o módulo express.

const petsRoutes = require("./router/petsRoutes") //Importamos as rotas relacionadas a pets do arquivo petsRoutes.

const app = express() //Criamos uma instância do aplicativo Express usando express().

app.use(express.json()) //Utilizamos o express.json() para fazer o parsing de requisições com formato JSON.
app.use("/pets", petsRoutes) //Utilizamos o app.use() para definir o prefixo "/pets" para as rotas importadas do petsRoutes. Isso significa que todas as rotas definidas no petsRoutes terão o prefixo "/pets" quando forem acessadas.

module.exports = app; //Exportamos o aplicativo Express para ser utilizado em outros arquivos.


/* Em resumo, esse código configura um servidor HTTP utilizando o Express, define rotas relacionadas a pets
e exporta o aplicativo Express para ser utilizado em outros arquivos
