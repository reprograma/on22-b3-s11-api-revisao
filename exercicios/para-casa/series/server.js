const app = require("./src/app");
const PORT = 5658;

app.listen(PORT, () => {
  console.log(`Seu servidor está na porta ${PORT}`);
});
