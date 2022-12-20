import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Estamos vivendo uma revolução tecnologica! Não fique para trás.</h1>
      <p>Olá, meu nome é Marlon! Sou desenvolvedor a alguns anos e este será meu projeto para apresentar meu portfolio! <b >Caso queira entrar em contato deixe seu e-mail abaixo!</b></p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Digite seu e-mail aqui" />
        <button type="button">Entrar em Contato</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="pessoas"/>
        <p>Mais de 150 clientes atendidos nessa tragetória!</p>
      </div>
    </div>
    <div className="gpt3__header-image">
      <img src={ai} alt="ai"/>
    </div>
  </div>
);

export default Header;