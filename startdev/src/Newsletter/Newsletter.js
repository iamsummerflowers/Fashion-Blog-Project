import React from 'react';
import './Newsletter.css';
import { Link } from 'react-router-dom';


function Newsletter() {
  return (
    <section className="Newsletter" id="newsletter">

      <div className="newsletterComponents">
        <h1 className="newsletterHeading">Newsletter</h1>
        <p className="newsletterBlurb"> Explore our handpicked selection of trending articles, seasonal collections, and editorial picks.</p>
        {/* <p className="heroBlurb">Photo by Recordo Gomez Angel on Unsplash</p> */}
        {/* Photo by <a href="https://unsplash.com/@rgaleriacom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ricardo Gomez Angel</a> on <a href="https://unsplash.com/photos/five-blue-denim-jeans-hanged-on-grey-cable-near-window-rNXy6ngoyQ0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
        <div className="newsletterButton-container">
            <div className="newsletterButton-wrap">
              <Link className="newsletterButton-1" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
                Start Exploring
              </Link>
            </div>
            <div className="newsletterButton-wrap">
              <Link className="newsletterButton-2" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
                Learn More
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;