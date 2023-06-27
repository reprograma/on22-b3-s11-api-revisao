const express = require("express") //Importamos o módulo express.

const petsRoutes = require("./router/petsRoutes") //Importamos as rotas relacionadas a pets do arquivo petsRoutes.

const app = express() //Criamos uma instância do aplicativo Express usando express().

app.use(express.json()) //Utilizamos o express.json() para fazer o parsing de requisições com formato JSON.
app.use("/pets", petsRoutes) //Utilizamos o app.use() para definir o prefixo "/pets" para as rotas importadas do petsRoutes. Isso significa que todas as rotas definidas no petsRoutes terão o prefixo "/pets" quando forem acessadas.

module.exports = app; //Exportamos o aplicativo Express para ser utilizado em outros arquivos.


/* Em resumo, esse código configura um servidor HTTP utilizando o Express, define rotas relacionadas a pets
<<<<<<< HEAD
e exporta o aplicativo Express para ser utilizado em outros arquivos.*/
=======
e exporta o aplicativo Express para ser utilizado em outros arquivos.*/
>>>>>>> cdd52a551e29ffed73fa8296247c8289cb46f3f5
