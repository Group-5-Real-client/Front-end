

// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import '../ContactUs/index1.css';
// const ContactUs = () => {
//   return (
//     <div className="contact-us">
//       <h1 className="contact-us__title">Contact Us</h1>
//       <p className="contact-us__content">If you have any questions or feedback about our products or services, please don't hesitate to contact us using the form below.</p>
//       <div className="contact-us__social">
//         <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook className="contact-us__icon" /></a>
//         <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="contact-us__icon" /></a>
//         <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="contact-us__icon" /></a>
//       </div>
//       <form className="contact-us__form">
//       <div className="input-group">
      
//         <input type="text" id="name" name="name" className="input" required />
//         <label htmlFor="name"className="input-label">Name:</label>
//         </div>
//         <div className="input-group">
//         <input type="email" id="email" name="email"  className="input" required />
//         <label htmlFor="email"className="input-label">Email:</label>
//         </div>
//         <div className="input-group">
//         <textarea id="message" name="message" rows="5"  className="input" required></textarea>
//         <label htmlFor="message"className="input-label">Message:</label>
//         </div>
    
//           <div className="register-buttons">
//         <button type="submit">Send</button></div>
//       </form>
//     </div>
//   );
// }

// export default ContactUs;
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import '../ContactUs/index1.css';
// import { HiLocationMarker } from "react-icons/hi";
// import { Hi } from 'react-icons';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <>
    <div className="contact-us">
      <div className='contact-us__left'>
      <h1 className="contact-us__title">Contact Us</h1>
      <p className="contact-us__content">
        If you have any questions or feedback about our products or services, please don't hesitate to contact us using the form below.
      </p>
      <div className="contact-us__social">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook className="contact-us__icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <FaTwitter className="contact-us__icon" />
        </a>
        <a href="https://www.instagram.com/binteldayaa/" target="_blank" rel="noreferrer">
          <FaInstagram className="contact-us__icon" />
        </a>
      </div>
      <div className="personal">
      <div className="contact-us__details">
        <div className="contact-us__detail">
          <FaMapMarkerAlt className="contact-us__icon" />
          <p className="contact-us__detail-text">
          {/* <HiLocationMarker/> */}
          123 Main Street, Anytown USA
          </p>
        </div>
        <br/>
        <div className="contact-us__detail">
          <AiOutlineMail className="contact-us__icon" />
          <a href="awadkhaled@example.com" className="contact-us__detail-text">
           contact@example.com
          </a>
          
        </div>
        <br/>
        <div className="contact-us__detail">
          <FaPhoneAlt className="contact-us__icon" />
          <a href="tel:+1234567890" className="contact-us__detail-text">
           (123) 456-7890
          </a>
        </div>
      </div>
      </div>
      </div>
      <div className='contact-us__right'>
      <form className="contact-us__form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" id="name" name="name" className="input" required />
          <label htmlFor="name" className="input-label">
            Name:
          </label>
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email" className="input" required />
          <label htmlFor="email" className="input-label">
            Email:
          </label>
        </div>
                <div className="input-group">
          <input type="tel" id="phone" name="phone" className="input" required />
          <label htmlFor="phone" className="input-label">
            Phone:
          </label>
        </div>
        <div className="input-group">
          <textarea id="message" name="message" rows="5" className="input" required></textarea>
          <label htmlFor="message" className="input-label">
            Message:
          </label>
        </div>
        <div className="register-buttons">
          <button type="submit">Send</button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
};

export default ContactUs;

