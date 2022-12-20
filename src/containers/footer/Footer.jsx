import React from 'react';
import logo from '../../assets/logo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Você quer entrar no futuro antes dos outros ?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <a href="#home"><p>Entre em contato</p></a>
    </div>

    <div className="gpt3__footer-copyright">
      <img src={logo} alt="logo"/>
      <p>@2022 - MOURA DEVELOPER. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;