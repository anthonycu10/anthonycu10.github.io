// src/components/Header.js
import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <h1>Anthony Cu</h1>
        </div>
        <nav className="nav-links">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;