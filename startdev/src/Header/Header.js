import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
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
            <HashLink smooth to="#hero" target="_self" rel="noopener noreferrer" onClick={toggleMobileNav}>
              <p>Home</p>
            </HashLink>
            <HashLink smooth to="#articles" target="_self" rel="noopener noreferrer" onClick={toggleMobileNav}>
              <p>Articles</p>
            </HashLink>
            <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer" onClick={toggleMobileNav}>
              <p>Collections</p>
            </Link>
            <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer" onClick={toggleMobileNav}>
              <p>About</p>
            </Link>
            <HashLink smooth to="#footer" target="_self" rel="noopener noreferrer" onClick={toggleMobileNav}>
              <p>Contact</p>
            </HashLink>
          </div>
          <div className="subscribe-btn-container">
            <HashLink smooth to="#newsletter" className="subscribe-btn" target="_self" rel="noopener noreferrer" onClick={toggleMobileNav}>
              Subscribe
            </HashLink>
          </div>
        </div>

      </div>



      <div className="header">

          <div className="nav-logo">
            <p>CURATED</p>
          </div>
          <div className="nav-links">
            <HashLink smooth to="#hero" target="_self" rel="noopener noreferrer">
              <p>Home</p>
            </HashLink>
            <HashLink smooth to="#articles" target="_self" rel="noopener noreferrer">
              <p>Articles</p>
            </HashLink>
            <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
              <p>Collections</p>
            </Link>
            <Link to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
              <p>About</p>
            </Link>
            <HashLink smooth to="#footer" target="_self" rel="noopener noreferrer">
              <p>Contact</p>
            </HashLink>
          </div>
          <div>
            <HashLink smooth to="#newsletter" className="subscribe-btn" target="_self" rel="noopener noreferrer">
              Subscribe
            </HashLink>
          </div>
      </div>
    </nav>
  );
}

export default Header;