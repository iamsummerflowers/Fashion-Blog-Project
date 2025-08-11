import React, { useState, useEffect } from 'react';
import './ArticlePop1.css';
import { HashLink } from 'react-router-hash-link';
import { MdOutlineClose } from "react-icons/md";



function ArticlePop({articleImage, header, tag, author, date, content }) {

  const [articleOpen, setArticleOpen] = useState(false);

  const toggleArticle = () => {
    setArticleOpen(!articleOpen);
  };

  return (
    <div className={`${articleOpen  ? 'hide' : 'article'}`}>
      <div className="articleHeader">
        <header className="articleHeader">
          HeaderHeaderHeaderHeaderHeaderHeaderHeader
        </header>
        <div>
          <MdOutlineClose className="articleExit" onClick={toggleArticle}/>
        </div>
      </div>
      <div className={`articleImage ${articleImage}`}>
        <div>
          <p className="articleAuthor">{author}</p>
          <p className="articleDate">{date}</p>
        </div>
        <div>
          <p className="articleTag">{tag}</p>
        </div>
      </div>
      <div className="articleContent">
        {content}
      </div>
      {/* <div className="articleHeader">
        Headers
      </div> */}
    </div>

  );
}

export default ArticlePop;