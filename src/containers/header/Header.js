import React, { useState } from "react";
import axios from "axios";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

function Header() {
  const [campos, setCampos] = useState({
    mensagem: "",
  });

  function handleInputChange(event) {
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("E-mail enviado! ", campos);
    send();
  }

  function send() {
    const formData = new FormData();
    Object.keys(campos).forEach((key) => formData.append(key, campos[key]));
    axios
      .post("/send-email", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert("E-mail enviado com sucesso!");
        console.log("RESPOSTA JSON: ", response.data);
      });
  }

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Estamos vivendo uma revolução tecnologica! Não fique para trás.
        </h1>
        <p>
          Olá, meu nome é Marlon! Sou desenvolvedor a alguns anos e este será
          meu projeto para apresentar meu portfolio!{" "}
          <b>Caso queira entrar em contato deixe seu e-mail abaixo!</b>
        </p>

        <form onSubmit={handleFormSubmit}>
          <div className="gpt3__header-content__input">
            <input
              type="email"
              id="mensagem"
              name="mensagem"
              placeholder="Digite seu e-mail."
              onChange={handleInputChange}
              required
            />
            <button type="submit">Entrar em Contato</button>
          </div>
        </form>

        <div className="gpt3__header-content__people">
          <img src={people} alt="pessoas" />
          <p>Mais de 150 clientes atendidos nessa tragetória!</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
