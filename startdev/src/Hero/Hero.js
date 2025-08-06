import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <section className="hero">

      <div className="heroComponents">
        <h1 className="heroHeading">Discover Curated Content for Curious Minds</h1>
        <p className="heroBlurb"> Explore our handpicked selection of trending articles, seasonal collections, and editorial picks.</p>
        {/* <p className="heroBlurb">Photo by Recordo Gomez Angel on Unsplash</p> */}
        {/* Photo by <a href="https://unsplash.com/@rgaleriacom?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ricardo Gomez Angel</a> on <a href="https://unsplash.com/photos/five-blue-denim-jeans-hanged-on-grey-cable-near-window-rNXy6ngoyQ0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
        <div className="heroButton-container">
            <div className="heroButton-wrap">
              <Link className="heroButton-1" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
                Start Exploring
              </Link>
            </div>
            <div className="heroButton-wrap">
              <Link className="heroButton-2" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
                Learn More
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;