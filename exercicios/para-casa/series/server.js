const app = require('./app')
const porta = 1010

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta} tudo ok`)
})
