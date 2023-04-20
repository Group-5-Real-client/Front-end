import "./index.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <div className="footer-container1">
        <img
          src="https://www.figma.com/file/8WOK9IiiJJFwH4mokwCJwH/eCommerce?node-id=2-193&t=53eWlZkaC4YKoDmI-4"
          alt="logo"
        />
        <p className="copyright">Copyright @ 2023</p>

        <div className="social-icons-container">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://whatsapp.com/">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </div>
      <div className="footer-container1">
        <h3>PRODUCTS</h3>
        <NavLink to="/HomeMade Food ">HomeMade Food </NavLink>
        <NavLink to="/">Recycling </NavLink>
        <NavLink to="/">Hygienic </NavLink>
      </div>
      <div className="footer-container1">
        <h3>COMPANY</h3>
        <NavLink to="/About">About Us</NavLink>
        <NavLink to="/Event">Events</NavLink>
        <NavLink to="/Contact">Contact Us</NavLink>
      </div>
      <div className="footer-container1">
  <h3>LOCATION</h3>
  <p>Coming Soon to </p>
  <p>Phone: <a href="tel:7129406">7129406</a></p>
  <p>Email: <a href="mailto:shop@gmail.com">shop@gmail.com</a></p>
</div>

    </footer>
  );
}

export default Footer;
