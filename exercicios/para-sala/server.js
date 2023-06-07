const app = require('./src/app')
const port = 1010

app.listen(port, () => {
    console.log(`O servidor na porta ${port} está rodando`)
})