const app = require("./streaming/src/app.js")
const PORT = 1590
app.listen(PORT, ()=> {
    console.log(`seu servidor está na porta ${PORT} e tudo ok.`)
})
