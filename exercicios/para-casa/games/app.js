const express = require("express") // importa o express
const app = express() //executa o express
app.use(express.json()) //uso o body parse

const gamesRoutes = require("./routes/gamesRoutes") // importa as rotas de games
app.use("/games", gamesRoutes) // definiu a rota padrão para games

module.exports = app