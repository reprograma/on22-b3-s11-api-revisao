const app = require("./src/app");
const port = 4455;
app.listen(port, () =>{
    console.log(`Servidor está rodando na porta ${port}`);
})
