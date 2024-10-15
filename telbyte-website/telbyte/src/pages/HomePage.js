// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <h2>Welcome to Telbyte</h2>
        <p>Your reliable network provider offering high-speed internet, mobile plans, and TV packages.</p>
        <section className="highlights">
          <div className="highlight">
            <h3>High-Speed Internet</h3>
            <p>Experience lightning-fast internet speeds with our fiber-optic network.</p>
          </div>
          <div className="highlight">
            <h3>Mobile Plans</h3>
            <p>Choose from a variety of affordable mobile plans to stay connected on the go.</p>
          </div>
          <div className="highlight">
            <h3>TV Packages</h3>
            <p>Enjoy a wide range of TV channels and on-demand content with our TV packages.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;