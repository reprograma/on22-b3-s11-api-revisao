const app = require("./src/app");
require("dotenv").config();

const PORT = process.env.API_PORT || 3036;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});