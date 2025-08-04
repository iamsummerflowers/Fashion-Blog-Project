import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
        <div id="nav-logo">
          <p>CURATED</p>
        </div>
        <div id="nav-links">
          <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
            <p>Home</p>
          </Link>
          <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
            <p>Articles</p>
          </Link>
          <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
            <p>Collections</p>
          </Link>
          <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
            <p>About</p>
          </Link>
          <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
            <p>Contact</p>
          </Link>
        </div>
        <div >
          <Link id="subscribe-btn" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
            Subscribe
          </Link>
        </div>
    </div>
  );
}

export default Header;