import React, { useState, useEffect, useRef } from 'react';
import './Newsletter.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';



function Newsletter() {

  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ygkfx7s',
      'template_d66swgn',
      form.current,
      'zFLZH29bRNDazrYni'
      ).then((result) => {
        setMessageSent(true);  
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
          console.log(error.text);
          console.log("message in error");
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   if (!email) {
  //     setMessage('Please enter your email address');
  //     setStatus('error');
  //     return;
  //   }
    
  //   if (!validateEmail(email)) {
  //     setMessage('Please enter a valid email address');
  //     setStatus('error');
  //     return;
  //   }
    
  //   // Here you would typically call your API to submit the email
  //   // For demonstration purposes, we'll just simulate success
  //   setMessage('Thank you for subscribing to our newsletter!');
  //   setStatus('success');
  //   setEmail('');
    
  //   // Reset success message after 5 seconds
  //   setTimeout(() => {
  //     setMessage('');
  //     setStatus('');
  //   }, 5000);
  // };

  return (
    <section className="Newsletter" id="newsletter">

      <div className="newsletterComponents">
        <h1 className="newsletterHeading">Stay Updated</h1>
        <p className="newsletterBlurb1"> Subscribe to our newsletter to recieve the latest articles, collections, and curated content directly in your inbox.</p>
        <form className="newsletterEmailSubmission" ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            id = "email"
            placeholder="Enter your email address"
            className="newsletterEmail"
            // aria-label="Email address"
            required
            onSubmit={sendEmail}
          />
          <div className="newsletterButton-wrap">
            <button className="newsletterButton" type="submit" value="Send" id = "send" onSubmit={sendEmail}>
              Subscribe
            </button>
          </div>
        </form>
        {messageSent && <p>Thanks for subscribing!</p>}
        <p className="newsletterBlurb2">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}

export default Newsletter;