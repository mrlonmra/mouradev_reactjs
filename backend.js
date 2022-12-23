const path = require("path");
const express = require("express");
const app = express();

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
  require("./src/services/mailServer")(mensagem)
    .then((response) => res.json(response));
});

app.use(express.static(path.join(__dirname, "build")));

app.listen(3001, () => {
  console.log("SERVIDOR RODANDO NA PORTA: 3001");
});
