import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
    <Feature title="Desenvolvimento Front-End" text="Atualmente estou me especializando em desenvolvimento Front-End, com ênfase na seguinte Stack: React.Js , Adobe XD e Figma. Tenho conhecimento básico em algumas tecnologias Back-End e também Banco de Dados, como: Javascript, PHP, Python e MySQL." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Nessa gama de oportunidades existem diversos campos a serem explorados!</h1>
      <p><a href="#features">Explore The Future 🤖</a></p>
    </div>
    <div className="gpt3__whatgpt3-container">
    <Feature title="Inteligência Artifical" text="Com o passar dos dias nos aproximamos cada vez mais das 'realidades alternativas' como a inteligência artificial nos filmes, será que vamos chegar a tanto?" />    
    <Feature title="Análise de Dados" text="Com tanta tecnologia a nossa disposição e com o passar do tempo geramos diversos dados com simples tarefas do dia a dia, a pergunta é: Como analisar isso tudo?" />
    <Feature title="Automação" text="Com nossas vidas tão corridas como podemos fazer tudo o que nos demandam sendo um só? Simples, a resposta é: Automação!" />
    </div>
  </div>
);

export default WhatGPT3;