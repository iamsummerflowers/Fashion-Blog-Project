import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";




function Footer() {
    return (
      <div className="footer" id="footer">

        <div className="footerMain">
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Column Title</h4>
              <p className="footerBlurb">First column blurb</p>
              <div className="footerSocials">
                <Link className="footerSocialLink" id="gitHub" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                  <VscGithub />
                </Link>
                <Link className="footerSocialLink" id="twitter" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                  <VscGithub />
                </Link>
                <Link className="footerSocialLink" id="instagram" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                  <VscGithub />
                </Link>
              </div>
            </div>
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Column Title</h4>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
            </div>
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Column Title</h4>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
              <Link className="footerLink" to="https://github.com/iamsummerflowers" target="_blank" rel="noopener noreferrer">
                Second Column Link
              </Link>
            </div>
            <div className="footerColumn">
              <h4 className="footerColumnHeader">Column Title</h4>
              <div className="footerContactInfo">
                <MdOutlineEmail className="footerIcon"/>
                <p>Email Address</p>
              </div>
              <div className="footerContactInfo">
                <MdOutlineLocalPhone className="footerIcon"/>
                <p>Phone Number</p>
              </div>
              <div className="footerContactInfo">
                <MdOutlineLocationOn className="footerIcon"/>
                <p>Physical Address</p>
              </div>
            </div>
          </div>
          <div className="footerCopy">
            <p>Row for copyright information</p>
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