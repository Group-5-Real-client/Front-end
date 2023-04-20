import React from "react";
import Logo from "../../images/shopBag.jpg";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import SearchBar from "../search/search";

function Navbar() {
  // const menuButton = () => {
  //   document.getElementsByClassName("nav-container")[0].classList.toggle("nav-change");
  //   document.getElementsByClassName("nav-navigation")[0].classList.toggle("nav-show");
  //   document.getElementsByClassName("nav-whole-nav")[0].classList.toggle("nav-vertical");
  // };

  const menuButton = () => {
    console.log("menuButton clicked");
    document
      .getElementsByClassName("nav-container")[0]
      .classList.toggle("nav-change");
    document
      .getElementsByClassName("nav-navigation")[0]
      .classList.toggle("nav-show");
    document
      .getElementsByClassName("nav-whole-nav")[0]
      .classList.toggle("nav-vertical");
    document
      .getElementsByClassName("nav-whole-nav")[0]
      .classList.toggle("nav-responsive");
    console.log("nav-responsive class toggled");
  };

  return (
    <nav className="nav-whole-nav">
      <div className="nav-navigation">
        <NavLink to="/" className="nav-link" onClick={menuButton}>
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={menuButton}>
          About
        </NavLink>

        <Dropdown />
        <NavLink to="/event" className="nav-link" onClick={menuButton}>
          Event
        </NavLink>

        <Link
          to="/Contact"
          id="nav-Contact"
          className="nav-link"
          onClick={menuButton}>
          Contact us
        </Link>
      </div>

      <div className="nav-logo">
        <Link className="nav-logo-title nav-link" to="/">
          <span className="nav-title">Bent el day3aa</span>
        </Link>
      </div>

      <div className="login-shop-icon">
        <SearchBar className="searchBar" />
        <Link
          to="/Login"
          id="nav-Login"
          className="nav-link"
          onClick={menuButton}>
          Login
        </Link>
        <img
          className="shop-icon"
          src={Logo}
          width="40"
          height="40"
          alt="shop icon"
        />
      </div>

      <div className="nav-menu">
        <div className="nav-container" onClick={menuButton}>
          <div className="nav-bar1"></div>
          <div className="nav-bar2"></div>
          <div className="nav-bar3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
