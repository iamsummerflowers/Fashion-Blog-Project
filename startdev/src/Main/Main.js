import React from 'react';
import './Main.css';
import Card from './Card.js';
import ArticlePop1 from './ArticlePop1.js';
import logo from '../assets/logoBrain.svg'


function Main() {
  return (
    <div className="main" id="articles">
      <div className="mainSubheader">
        <h1>Articles</h1>
        <img src={logo} alt="Logo"/>
      </div>
      <div className="holdsAllCards">
          <Card 
            id="                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
            header="Before you start..."
            tag=" “tag” "
            blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            author="John Smith"
            date="Dec 15, 2025"
            cardImage="cardImage1"
            articleComponent="ArticlePop1"
          />
          <Card 
            id="secondCard"
            header="..This Template Includes"
            tag=" “tag” "
            blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            author="John Smith"
            date="Dec 15, 2025"
            cardImage="cardImage2"
            articleComponent="ArticlePop1"
          />
          <Card 
            id="thirdCard"
            header="Clone this template &..."
            tag=" “tag” "
            blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
            author="John Smith"
            date="Dec 15, 2025"
            cardImage="cardImage3"
            articleComponent="ArticlePop1"
          />
      </div>
    </div>
  );
}

export default Main;