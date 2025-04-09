// src/components/TopNavbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TopNavbar.css'; // Custom CSS for TopNavbar

function TopNavbar() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Simulate sign-in state

  const toggleSignIn = () => {
    setIsSignedIn(!isSignedIn); // Toggle the sign-in state for testing
  };

  return (

    <nav className="navbar navbar-expand-lg custom-navbar shadow-lg animate__animated animate__fadeInDown">

      <div className="container-fluid">
        {/* Left side: Logo ("Velnor" text as logo) */}
        <Link className="navbar-brand logo" to="/">
          <span className="logo-text">Velnor</span>
        </Link>

        {/* Right side: Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item animate__animated animate__fadeIn animate__delay-1s">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item animate__animated animate__fadeIn animate__delay-2s">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item animate__animated animate__fadeIn animate__delay-3s">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {/* Conditionally render Sign In or Sign Out based on sign-in state */}
            {!isSignedIn ? (
              <>
                <li className="nav-item animate__animated animate__fadeIn animate__delay-4s">
                  <Link className="nav-link" to="/signin">Sign In</Link>
                </li>
                <li className="nav-item animate__animated animate__fadeIn animate__delay-4s">
                  <button className="btn btn-link" onClick={toggleSignIn}>Simulate Sign In</button>
                </li>
              </>
            ) : (
              <li className="nav-item animate__animated animate__fadeIn animate__delay-4s">
                <button className="btn btn-link" onClick={toggleSignIn}>Sign Out</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
