const app = require("./src/models/app")

const PORT = 3232


app.listen(PORT, () => {
    console.log(`Seu servidor está na porta: ${PORT}`)
}) 