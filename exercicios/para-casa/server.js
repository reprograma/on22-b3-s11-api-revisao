const app = require("./games/app")
const PORT = 7788; 

app.listen(PORT, () => { 
    console.log(`Servidor está rodando na porta ${PORT}`); 
})
