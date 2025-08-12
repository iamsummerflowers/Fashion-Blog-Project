import React, { useState, useEffect } from 'react';
import './Newsletter.css';
import { Link } from 'react-router-dom';


function Newsletter() {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      setStatus('error');
      return;
    }
    
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }
    
    // Here you would typically call your API to submit the email
    // For demonstration purposes, we'll just simulate success
    setMessage('Thank you for subscribing to our newsletter!');
    setStatus('success');
    setEmail('');
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setMessage('');
      setStatus('');
    }, 5000);
  };

  return (
    <section className="Newsletter" id="newsletter">

      <div className="newsletterComponents">
        <h1 className="newsletterHeading">Stay Updated</h1>
        <p className="newsletterBlurb1"> Subscribe to our newsletter to recieve the latest articles, collections, and curated content directly in your inbox.</p>
        <div className="newsletterEmailSubmission">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="newsletterEmail"
            aria-label="Email address"
          />
          <div className="newsletterButton-wrap">
            <Link className="newsletterButton" to="https://thinktoprod.com" target="_blank" rel="noopener noreferrer">
              Subscribe
            </Link>
          </div>
        </div>
        <p className="newsletterBlurb2">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}

export default Newsletter;