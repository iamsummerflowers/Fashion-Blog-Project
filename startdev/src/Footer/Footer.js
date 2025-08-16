import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { VscTwitter } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";




function Footer() {

  const currentYear = new Date().getFullYear();

    return (
      <div className="footer" id="footer">

        <div className="footerMain">
            <div className="footerColumn">
              <h4 className="footerColumnHeader" id="Curated">CURATED</h4>
              <p className="footerBlurb">Discover thoughtfully selected content for curious minds.</p>
              <div className="footerSocials">
                <Link className="footerSocialLink" id="gitHub" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                  <VscGithub />
                </Link>
                <Link className="footerSocialLink" id="twitter" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </Link>
                <Link className="footerSocialLink" id="instagram" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                  <VscTwitter />
                </Link>
              </div>
            </div>
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Catergories</h4>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Technology
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Lifestyle
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Wellness
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Arts & Culture
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Science
              </Link>
            </div>
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Quick Links</h4>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                About Us
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Contact
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Contribute
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </Link>
            </div>
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Contact Us</h4>
              <div className="footerContactInfo">
                
                <p> <MdOutlineEmail className="footerIcon"/> info@curated.com</p>
              </div>
              <div className="footerContactInfo">
                <p><MdOutlineLocalPhone className="footerIcon"/> +1(555) 123-4567</p>
              </div>
              <div className="footerContactInfo">
                <p> <MdOutlineLocationOn className="footerIcon"/> 123 Content Steet Digtal City</p>
              </div>
            </div>
          </div>
          <div className="footerCopy">
            <p>&copy; {currentYear} Curated. All rights reserved.</p>
          </div>

        {/* <div className="footerLeft">
          <Link className="link" id="twos" to="https://www.theworksofsummer.com/" target="_blank" rel="noopener noreferrer">theworksofsummer.com</Link>
        </div>
        <div className="footerRight">
          <p id="sb">
            <p id="sb-text">START BUILDING</p> 
            <Link className="link" id="iconGH" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
              <VscGithub />
            </Link>
          </p>
        </div> */}

      </div>
    );
  }
  
  export default Footer;