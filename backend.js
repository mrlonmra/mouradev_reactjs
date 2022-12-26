const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

app.use(express.json());

app.post("/send-email", (req, res, next) => {
  const mensagem = req.body.mensagem;
  require("./src/services/mailServer")(mensagem).then((response) =>
    res.json({
      erro: false,
      id: response.id,
      mensagem: "Mensagem de contato enviando com sucesso!",
    })
  );
});

app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => {
  console.log(`Servidor rodando na porta : ${port}`);
});
