import "./navbar.css";
import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../images/shopBag.jpg";
import { NavLink, Link } from "react-router-dom";
import DropdownShop from "../dropDown-shop/dropDown-shop";
import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
import SearchBar from "../search/search";





function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [navLinksOpen, setNavLinksOpen] = useState(false);

  const menuButton = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinksButton = () => {
    setNavLinksOpen(!navLinksOpen);
  };

  const navContainerClasses = ["nav-container"];
  const navNavigationClasses = ["nav-navigation"];
  const navWholeNavClasses = ["nav-whole-nav"];

  if (menuOpen) {
    navContainerClasses.push("nav-change");
    navNavigationClasses.push("nav-show");
    navWholeNavClasses.push("nav-vertical");
  }

  if (navLinksOpen) {
    navNavigationClasses.push("nav-links-show");
  }

  return (

    
    
    <nav id="nav-whole-nav"  className={navWholeNavClasses.join(" ")}>



        <div id="nav-container" className={navContainerClasses.join(" ")} onClick={menuButton}>
                <div className="nav-bar1"></div>
                <div className="nav-bar2"></div>
                <div className="nav-bar3"></div>
        </div>

    
      <div className="nav-links-container   nav-navigation" onClick={navLinksButton}>

      <div className={navNavigationClasses.join(" ")}>
       

        <NavLink className="nav-link " onClick={menuButton}>
          <DropdownShop className="dropDown-shop" />
        </NavLink>

        <NavLink className="nav-link" onClick={menuButton}>
          <DropdownAboutUs className="dropDown-about" />
        </NavLink>

        <NavLink to="/event" className="nav-link  navEvent"onClick={menuButton}>
          Events
        </NavLink>

        <Link to="/Contact" id="nav-Contact" className="nav-link"onClick={menuButton}>
          Contact
        </Link>
      </div>

      <div className="nav-logo">
        <Link className="nav-logo-title " to="/">
          <span className="nav-title">Rooted</span>
        </Link>
      </div>

      <div className="login-shop-icon">
        <SearchBar className="searchBar" />
        <Link to="/Login" id="nav-Login" className="nav-link" onClick={menuButton}>
          Login
        </Link>
        <img
          className="shop-icon"
          src={Logo}
          width="30"
          height="30"
          alt="shop icon"
        />
      </div>

      </div>
 
    </nav>
  );
}

export default Navbar;
