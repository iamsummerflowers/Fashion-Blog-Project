import React from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
