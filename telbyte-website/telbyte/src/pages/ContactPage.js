// src/pages/ContactPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <main>
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us using the form below or through our contact details.</p>
        <section className="contact-form-section">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
        <section className="contact-details">
          <h3>Contact Information</h3>
          <p>Email: contact@telbyte.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Telbyte Street, Johannesburg, South Africa</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

