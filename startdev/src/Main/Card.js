import React from 'react';
import './Card.css';
import { HashLink } from 'react-router-hash-link';


function Card({ id, cardImage, header, tag, blurb, author, date }) {
  return (
    <div className="card" id={id}>
        <div className={`cardImage ${cardImage}`}>
          <p className="cardTag">{tag}</p>
        </div>
        <h3 className="cardHeader">{header}</h3>
        <p className="cardBlurb">{blurb}</p>
        <div className="cardADCWrap">
          <p className="cardAuthor">{author}</p>
          <p className="cardDate">{date}</p>
        </div>
        <div className="article-btn-container">
          <HashLink className="article-btn" target="_self" rel="noopener noreferrer">
            Read More
          </HashLink>
        </div>
    </div>
  );
}

export default Card;