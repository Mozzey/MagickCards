import React from 'react';
import './navbar.css';

const Navbar = props => {
  const { branding } = props;
  return (
    <nav>
      <ul className="navbar">
        <a href="/" className="branding">
          {branding}
        </a>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Languages
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Custom
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
