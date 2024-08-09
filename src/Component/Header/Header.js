import React from 'react';
import './Header.css';
import logo from './logo.png';

function Header() {
  return (
      <header className="header">
        <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <div className="label">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SERVICES</p>
            <p>CONTACT</p>
          </div>
      </header>
  );
}

export default Header;
