const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.API_PORT || 4040;
app.listen(PORT, ()=>{
  console.log(`Seu servidor está rodando na porta ${PORT}`);
});