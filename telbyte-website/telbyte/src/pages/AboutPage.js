// src/pages/AboutPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <Header />
      <main className="zoom-in">
        <h2>About Us</h2>
        <p>Telbyte is a leading network provider dedicated to delivering reliable and affordable services. Our mission is to connect people and businesses with the world through innovative technology and exceptional customer service.</p>
        <section className="mission">
          <h3>Our Mission</h3>
          <p>To provide high-quality network services that enhance the lives of our customers and support their digital needs.</p>
        </section>
        <section className="values">
          <h3>Our Values</h3>
          <ul>
            <li>Customer Satisfaction</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Community Engagement</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
