const app = require("./src/app");
const port = 7070;

app.listen(port, () => {
    console.log('Servidor está rodando na porta ${port}');
})