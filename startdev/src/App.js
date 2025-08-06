import React from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import Hero from './Hero/Hero.js';
import Main from './Main/Main.js';
import Newsletter from './Newsletter/Newsletter.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
