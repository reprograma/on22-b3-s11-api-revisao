const app = require('./games-e-series/src/app')
const PORT = 3866

app.listen(PORT, () => {
    console.log(`Servidor está executando na porta ${PORT}`)
})