import React, { useState, useEffect, lazy, Suspense  } from 'react';

import './Card.css';
import ArticlePop1 from './ArticlePop1.js';
import { HashLink } from 'react-router-hash-link';


function Card({ id, cardImage, header, tag, blurb, author, date, articleComponent }) {

  const ArticleComponent = lazy(() => import(`./${articleComponent}`));


  const [articleOpen, setArticleOpen] = useState(false);

  const toggleArticle = () => {
    setArticleOpen(!articleOpen);
  };

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
        <div className="article-btn-container" >
          <HashLink onClick={toggleArticle} className="article-btn" target="_self" rel="noopener noreferrer" >
            Read More
          </HashLink>
        </div>
        <div className={`${articleOpen  ? 'articlePop' : 'hide'}`}>
          <Suspense fallback={<div>...</div>}>
            <ArticleComponent />
          </Suspense>
        </div>
    </div>
  );
}

export default Card;
