import React, { useState } from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

function Header() {
  const [campos, setCampos] = useState({
    mensagem: "",
  });

  const [response, setResponse] = useState({
    type: "",
    mensagem: "",
  });

  const onChangeInput = (e) =>
    setCampos({ ...campos, [e.target.name]: e.target.value });

  const sendContact = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/send-email", {
        method: "POST",
        body: JSON.stringify(campos),
        headers: { "Content-Type": "application/json" },
      });

      const responseEnv = await res.json();

      if (responseEnv.erro) {
        setResponse({
          type: "error",
          mensagem: responseEnv.mensagem,
        });
      } else {
        setResponse({
          type: "success",
          mensagem: responseEnv.mensagem,
        });

        setCampos({
          mensagem: "",
        });
      }
    } catch (err) {
      setResponse({
        type: "error",
        mensagem: "Erro: Tente mais tarde!",
      });
    }
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Estamos vivendo uma revolução tecnológica! Não fique para trás.
        </h1>
        <p>
          Olá, meu nome é Marlon! Sou desenvolvedor há alguns anos e este será
          meu projeto para apresentar meu portfólio!{" "}
          <b>Caso queira entrar em contato, deixe seu e-mail abaixo!</b>
        </p>

        <form onSubmit={sendContact}>
          <div className="gpt3__header-content__input">
            <input
              type="email"
              id="mensagem"
              name="mensagem"
              placeholder="Digite seu e-mail."
              onChange={onChangeInput}
              value={campos.mensagem}
              required
            />
            <button type="submit">Entrar em Contato</button>
          </div>
        </form>

        {response.type === "error" && (
          <p className="alert-danger">{response.mensagem}</p>
        )}

        {response.type === "success" && (
          <p className="alert-success">{response.mensagem}</p>
        )}

        <div className="gpt3__header-content__people">
          <img src={people} alt="pessoas" />
          <p>Mais de 150 clientes atendidos nessa trajetória!</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
}

export default Header;
