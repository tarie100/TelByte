// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import About from '../components/About';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welcome to Telbyte</h2>
        <p>Your reliable network provider.</p>
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

