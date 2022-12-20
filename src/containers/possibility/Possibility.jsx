import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Viva o impossível!</h4>
      <h1 className="gradient__text">As possibilidades<br />estão além da sua imaginação</h1>
      <p>O futuro “orbita” em um amplo conjunto de possibilidades, as quais podem se desdobrar de forma surpreendentemente rápida.</p>
    </div>
  </div>
);

export default Possibility;