import React from 'react';
import { php, python, html, css, mysql, linux} from './imports';
import './home.css';

const Home = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={php} alt="php"/>
      </div>
      <div>
        <img src={python} alt="python"/>
      </div>
      <div>
        <img src={html} alt="html"/>
      </div>
      <div>
        <img src={css} alt="css"/>
      </div>
      <div>
        <img src={mysql} alt="mysql"/>
      </div>
      <div>
        <img src={linux} alt="linux"/>
      </div>
      <p className="descricao__techs">Algumas das tecnologias utilizadas em meus desenvolvimentos!</p>
    </div>
  )
}

export default Home