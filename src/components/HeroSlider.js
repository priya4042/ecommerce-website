import React from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <div className="slide-item">
        <video
          className="slide-video"
          muted
          autoPlay
          playsInline
          loop
          poster="/images/fallback.jpg"
        >
          <source src="https://cdn.shopify.com/videos/c/o/v/9d88411d442843aeaf8d4fa5efd71a42.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="slide-overlay">
          <h1 className="logo-text">Velnor</h1>
          <h2>Black Hoodie</h2>
          <p>Stylish, Sleek, and Comfortable</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
