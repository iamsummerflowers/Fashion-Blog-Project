import React, { useState, useEffect} from 'react';
import './Card.css';
import { HashLink } from 'react-router-hash-link';
import { MdOutlineClose } from "react-icons/md";



function Card({ id, cardImage, header, tag, blurb, author, date, subHeading1, subHeading2, subHeading3, content1, content2, content3, state, handler, content, articleClass }) {

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
        <div className={`${articleOpen  ? 'articleOverlay': 'hide'}`}>
          <div className={`${articleOpen  ? 'article': 'hide'}`}>
            <div className="articleHeadernExit">
              <h1 className="articleHeader"> {header} </h1>
              <MdOutlineClose className="articleExit" onClick={toggleArticle}/>
            </div>
            <div className={`articleBuffer ${cardImage}`}>
              <div className="articleAuthornDate">
                <p className="articleAuthor">{author}</p>
                <p className="articleDate">{date}</p>
              </div>
              <div className="articleTag">
                <p>{tag}</p>
              </div>
            </div>
            <div className="articleContent">
              <h2> {subHeading1} </h2>
              <p> {content1} </p>
              <h2> {subHeading2} </h2>
              <p> {content2} </p>
              <h2> {subHeading3} </h2>
              <p> {content3} </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Card;
