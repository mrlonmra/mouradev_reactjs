import React from 'react'
import { Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import {  Home, CTA, Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Home  />
      <WhatGPT3 />
      <Features />
      <Possibility  />
      <CTA  />
      <Footer />          
      </div>    
  )
};

export default App