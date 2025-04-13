// src/components/About.js
import React from 'react';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            We are dedicated to bringing you the best products with exceptional service. 
            Our mission is to provide an unforgettable experience, ensuring satisfaction with every purchase.
          </p>
          <p className="about-description">
            Join us as we grow and innovate in the world of e-commerce!
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/500x300" alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default About;
