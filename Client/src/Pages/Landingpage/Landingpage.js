// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./landingpage.css"


function LandingPage() {
  return (
    <div className="landing-page">
          <div className='boxed'>
      <h1 className='cdss'>Welcome</h1>
      <p className='cds'>Please login or register to continue.</p>
      <div className="action-buttons">
        <Link to="/login" className="button">Login</Link>
        <Link to="/register" className="button">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
