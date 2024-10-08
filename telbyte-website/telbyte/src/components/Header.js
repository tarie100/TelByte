// src/components/Header.js
import React from 'react';
import Navigation from './Navigation';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <h1>Telbyte</h1>
      <Navigation />
    </header>
  );
};

export default Header;

