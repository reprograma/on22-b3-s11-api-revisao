const app = require("../games/src/models/app");
require('dotenv').config();

const PORT = process.env.API_PORT || 3030;
app.listen(PORT, () => {
  console.log(`Seu servidor está rodando na porta ${PORT}`);
})
