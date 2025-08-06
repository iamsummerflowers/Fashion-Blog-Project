import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";



function Header() {
  
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };


  return (
    <nav className="nav-container">
      <div className="header-mobile">
        <div onClick={toggleMobileNav} className={`${mobileNavOpen  ? 'hide' : 'mobile-menu-toggle1'}`}>
          <p id="open" >
            <GiHamburgerMenu/>
          </p>
        </div>
        <div className={`${mobileNavOpen  ? 'header-mobileOpen' : 'hide'}`}>
          <div className="nav-logo">
            <p>CURATED</p>
            <MdOutlineClose className="mobile-menu-toggle2" onClick={toggleMobileNav}/>
          </div>
          <div className="nav-links">
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
          <div className="subscribe-btn-container">
            <Link className="subscribe-btn" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
              Subscribe
            </Link>
          </div>
        </div>

      </div>



      <div className="header">

          <div className="nav-logo">
            <p>CURATED</p>
          </div>
          <div className="nav-links">
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
          <div>
            <Link className="subscribe-btn" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
              Subscribe
            </Link>
          </div>
      </div>
    </nav>
  );
}

export default Header;