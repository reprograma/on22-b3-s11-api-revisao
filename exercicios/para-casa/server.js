const app = require("./games/src/app") //importando o app
const port = 1212 

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`)
})


