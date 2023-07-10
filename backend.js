const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");
const mailServer = require("./src/services/mailServer");

app.use(express.json());
app.use(cors()); // Habilita o CORS para todas as origens

app.post("/send-email", (req, res, next) => {
  const { mensagem } = req.body;
  mailServer(mensagem)
    .then((response) =>
      res.json({
        erro: false,
        id: response.messageId,
        mensagem: "Mensagem de contato enviada com sucesso!",
      })
    )
    .catch((error) =>
      res.status(500).json({
        erro: true,
        mensagem: "Ocorreu um erro ao enviar a mensagem de contato.",
      })
    );
});

app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
