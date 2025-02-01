<<<<<<< HEAD
// Component/Header/Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
=======
import React from 'react';
>>>>>>> ebe698f3f41c9f6dccc9f6afe0ff57df0d4095da
import './Header.css';
import logo from './logo.png';

function Header() {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> ebe698f3f41c9f6dccc9f6afe0ff57df0d4095da
