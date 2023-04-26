

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../ContactUs/index.css';
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1 className="contact-us__title">Contact Us</h1>
      <p className="contact-us__content">If you have any questions or feedback about our products or services, please don't hesitate to contact us using the form below.</p>
      <div className="contact-us__social">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="contact-us__icon" /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="contact-us__icon" /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="contact-us__icon" /></a>
      </div>
      <form className="contact-us__form">
      <div className="input-group">
      
        <input type="text" id="name" name="name" className="input" required />
        <label htmlFor="name"className="input-label">Name:</label>
        </div>
        <div className="input-group">
        <input type="email" id="email" name="email"  className="input" required />
        <label htmlFor="email"className="input-label">Email:</label>
        </div>
        <div className="input-group">
        <textarea id="message" name="message" rows="5"  className="input" required></textarea>
        <label htmlFor="message"className="input-label">Message:</label>
        </div>
    
          <div className="register-buttons">
        <button type="submit">Send</button></div>
      </form>
    </div>
  );
}

export default ContactUs;
