import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Me</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
        <button className="cv-button">Download CV</button>
      </nav>
    </header>
  );
};

export default Header;
