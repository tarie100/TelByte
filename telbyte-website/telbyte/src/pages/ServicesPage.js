// src/pages/ServicesPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <Header />
      <main>
        <h2>Our Services</h2>
        <section className="service">
          <h3>High-Speed Internet</h3>
          <p>Our fiber-optic internet service provides speeds up to 1 Gbps, ensuring seamless streaming, gaming, and browsing.</p>
        </section>
        <section className="service">
          <h3>Mobile Plans</h3>
          <p>We offer a variety of mobile plans to suit your needs, from unlimited data to pay-as-you-go options.</p>
        </section>
        <section className="service">
          <h3>TV Packages</h3>
          <p>Enjoy a wide selection of TV channels, including sports, movies, and international content, with our customizable TV packages.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
