const app = require("./games/app"); 
//const app = require("./src/models/app"); 

const PORT = 3333

app.listen(PORT, () => {
  console.log(`Seu servidor está rodando na porta ${PORT}`);
});