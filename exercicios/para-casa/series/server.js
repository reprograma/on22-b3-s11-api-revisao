const app = require("./src/app");

const PORT = 1818;

app.listen(PORT, () => { 
    console.log(`Servidor está rodando na porta ${PORT}`); 
})