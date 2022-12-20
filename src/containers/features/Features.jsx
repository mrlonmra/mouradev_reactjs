import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Desenvolvimento WEB',
    text: 'Desenvolvimento de sites de acordo com a necessidade do cliente. Utilizo das tecnologias disponíveis no Front-End.',
  },
  {
    title: 'Desenvolvimento Telefonia IP',
    text: 'Solução em telefonia IP para empresas. Sistema de PABX com controle de faturamento, crédito e adesão de clientes.',
  },
  {
    title: 'Desenvolvimento Mobile',
    text: 'Desenvolvimento de aplicações para sistemas Android e IOs. Estou desenvolvendo minhas habilidades na área mobile.',
  },
  {
    title: 'Análise de dados Estratégicos',
    text: 'Com base na minha formação acadêmica e experiências profissionais, consigo fazer análises técnicas em cima de áreas de gestão, trazendo assim uma Skill que pode ser muito útil.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">O Futuro é Agora e Você Só Precisa Concretizar. Participe hoje e faça acontecer.</h1>
      <p>Busque conhecimento, não fique para trás!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;