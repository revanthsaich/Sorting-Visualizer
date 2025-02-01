// Component/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logo from './logo.png';

function Header() {
  return (
    <header className="header">
      {/* Make the logo clickable */}
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Company Logo" className="logo" />
        </Link>
      </div>
      <div className="label">
        {/* Use Link for navigation */}
        <Link to="/">HOME</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </header>
  );
}

export default Header;