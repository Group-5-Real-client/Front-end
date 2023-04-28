import "./navbar.css";
import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../images/shopBag.jpg";
import { NavLink, Link } from "react-router-dom";
import DropdownShop from "../dropDown-shop/dropDown-shop";
import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
import SearchBar from "../search/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="parentNavbar">
      <section  id="nav-whole-nav" className="nav-links-container">
        <main class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <li className="">
              <NavLink className="nav-link ">
                <DropdownShop className="dropDown-shop    menu__item" />
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link menu__item">
                <DropdownAboutUs className="dropDown-about" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/event" className="nav-link  navEvent menu__item">
                Events
              </NavLink>
            </li>
            <li>
              <Link
                to="/Contact"
                id="nav-Contact"
                className="nav-link menu__item">
                Contact
              </Link>
            </li>

            <li className="_persone_link_icon">
              <FontAwesomeIcon icon={faUser} />

              <Link to="/Login" id="nav-Login_mobile" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </main>

        <section className="navs__links  ">
          <NavLink className="nav__nav">
            <DropdownShop className="dropDown-shop" />
          </NavLink>

          <NavLink className="nav__nav">
            <DropdownAboutUs className="dropDown-about" />
          </NavLink>

          <NavLink to="/event" className="nav__nav  nav-link  navEvent">
            Events
          </NavLink>

          <Link to="/Contact" id="nav-Contact" className="nav__nav  nav-link">
            Contact
          </Link>
        </section>

        <div className="nav-logo">
          <Link className="nav-logo-title " to="/">
            <span className="nav-title">Rooted</span>
          </Link>
        </div>

        <div className="login-shop-icon">
          <SearchBar className="searchBar" />
          <Link to="/Login" id="nav-Login" className="nav__nav  nav-link">
            Login
          </Link>

          <img
            className="shop-icon"
            src={Logo}
            width="25"
            height="25"
            alt="shop icon"
          />
        </div>
      </section>
    </nav>
  );
}

export default Navbar;

// import "./navbar.css";
// import React from "react";
// import { useState, useEffect } from "react";
// import Logo from "../../images/shopBag.jpg";
// import { NavLink, Link } from "react-router-dom";
// import DropdownShop from "../dropDown-shop/dropDown-shop";
// import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
// import SearchBar from "../search/search";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import axios from "axios";
// import cookie from "react-cookies";

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//       isLoggedInFunc();
//   }, []);

//   const isLoggedInFunc = () => {
//       axios
//           .get(`${process.env.REACT_APP_URL}/user/is-logged-in`, {
//               headers: { auth_token: cookie.load("auth_token") },
//           })
//           .then((response) => {
//               if (response.status === 200) {
//                   setIsLoggedIn(true);
//               }
//           })
//           .catch((error) => {
//               if (error.response === undefined) {
//                   setIsLoggedIn(false);
//                 } else {
//                   setIsLoggedIn(false);
//               }
//           });
//   };

//   const logOut = () => {
//     cookie.remove("auth_token", { path: "/" });
//     cookie.remove("user", { path: "/" });
//     isLoggedInFunc();
// };

//   return (
//     <nav id="nav-whole-nav" className="nav-links-container">
//       <FontAwesomeIcon className="menu_icon_link" icon={faBars} onClick={handleClick}/>

//       <section className="navs__links ">
//         <NavLink className="nav-link " onClick={closeMobileMenu}>
//           <DropdownShop className="dropDown-shop" />
//         </NavLink>

//         <NavLink className="nav-link" onClick={handleClick}>
//           <DropdownAboutUs className="dropDown-about" />
//         </NavLink>

//         <NavLink to="/event" className="nav-link  navEvent" onClick={handleClick}>
//           Events
//         </NavLink>

//         <Link to="/Contact" id="nav-Contact" className="nav-link" onClick={handleClick}>
//           Contact
//         </Link>
//       </section>

//       <div className="nav-logo">
//         <Link className="nav-logo-title " to="/">
//           <span className="nav-title">Rooted</span>
//         </Link>
//       </div>

//       <div className="login-shop-icon">
//         <SearchBar className="searchBar" />
//         <Link to="/Login" id="nav-Login" className="nav-link">
//           Login
//         </Link>
//         <img
//           className="shop-icon"
//           src={Logo}
//           width="25"
//           height="25"
//           alt="shop icon"
//         />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// =====================================================
// ===============================================

// import "./navbar.css";
// import React from "react";
// import { useState, useEffect } from "react";
// import Logo from "../../images/shopBag.jpg";
// import { NavLink, Link } from "react-router-dom";
// import DropdownShop from "../dropDown-shop/dropDown-shop";
// import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
// import SearchBar from "../search/search";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// function Navbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   return (
//     <nav id="nav-whole-nav" className="nav-links-container">

//       <section className="navs__links ">
//         <NavLink className="nav-link " onClick={closeMobileMenu}>
//           <DropdownShop className="dropDown-shop" />
//         </NavLink>

//         <NavLink className="nav-link" onClick={handleClick}>
//           <DropdownAboutUs className="dropDown-about" />
//         </NavLink>

//         <NavLink to="/event" className="nav-link  navEvent" onClick={handleClick}>
//           Events
//         </NavLink>

//         <Link to="/Contact" id="nav-Contact" className="nav-link" onClick={handleClick}>
//           Contact
//         </Link>
//       </section>

//       <div className="nav-logo">
//         <Link className="nav-logo-title " to="/">
//           <span className="nav-title">Rooted</span>
//         </Link>
//       </div>

//       <div className="login-shop-icon">
//         <SearchBar className="searchBar" />
//         <Link to="/Login" id="nav-Login" className="nav-link">
//           Login
//         </Link>
//         <img
//           className="shop-icon"
//           src={Logo}
//           width="25"
//           height="25"
//           alt="shop icon"
//         />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// ===================================================
// ==========================================

// import "./navbar.css";
// import React from "react";
// import { useState, useEffect } from "react";
// import Logo from "../../images/shopBag.jpg";
// import { NavLink, Link } from "react-router-dom";
// import DropdownShop from "../dropDown-shop/dropDown-shop";
// import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
// import SearchBar from "../search/search";

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav
//       id="nav-whole-nav"
//       className={`nav-links-container ${isMobile ? "mobile" : ""}`}
//     >
//       <section className={click ? "navs__links active" : "navs__links"}>
//         <NavLink className="nav-link " onClick={closeMobileMenu}>
//           <DropdownShop className="dropDown-shop" />
//         </NavLink>

//         <NavLink className="nav-link" onClick={closeMobileMenu}>
//           <DropdownAboutUs className="dropDown-about" />
//         </NavLink>

//         <NavLink
//           to="/event"
//           className="nav-link  navEvent"
//           onClick={closeMobileMenu}
//         >
//           Events
//         </NavLink>

//         <Link
//           to="/Contact"
//           id="nav-Contact"
//           className="nav-link"
//           onClick={closeMobileMenu}
//         >
//           Contact
//         </Link>
//       </section>

//       <div className="nav-logo">
//         <Link className="nav-logo-title " to="/">
//           <span className="nav-title">Rooted</span>
//         </Link>
//       </div>

//       <div className="login-shop-icon">
//         <SearchBar className="searchBar" />
//         <Link to="/Login" id="nav-Login" className="nav-link">
//           Login
//         </Link>
//         <img
//           className="shop-icon"
//           src={Logo}
//           width="25"
//           height="25"
//           alt="shop icon"
//         />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import "./navbar.css";
// import React from "react";
// import { useState , useEffect} from "react";
// import Logo from "../../images/shopBag.jpg";
// import { NavLink, Link } from "react-router-dom";
// import DropdownShop from "../dropDown-shop/dropDown-shop";
// import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
// import SearchBar from "../search/search";

// function Navbar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <>
//     {!isMobile && (
//     <nav id="nav-whole-nav" className="nav-links-container">

//       <section className={click ? "navs__links active" : "navs__links"}>
//         <NavLink className="nav-link " onClick={closeMobileMenu}>
//           <DropdownShop className="dropDown-shop" />
//         </NavLink>

//         <NavLink className="nav-link" onClick={closeMobileMenu}>
//           <DropdownAboutUs className="dropDown-about" />
//         </NavLink>

//         <NavLink to="/event" className="nav-link  navEvent" onClick={closeMobileMenu}>
//           Events
//         </NavLink>

//         <Link to="/Contact" id="nav-Contact" className="nav-link" onClick={closeMobileMenu}>
//           Contact
//         </Link>
//       </section>

//       <div className="nav-logo">
//         <Link className="nav-logo-title " to="/">
//           <span className="nav-title">Rooted</span>
//         </Link>
//       </div>

//       <div className="login-shop-icon">
//         <SearchBar className="searchBar" />
//         <Link to="/Login" id="nav-Login" className="nav-link">
//           Login
//         </Link>
//         <img
//           className="shop-icon"
//           src={Logo}
//           width="25"
//           height="25"
//           alt="shop icon"
//         />
//       </div>
//     </nav>
//     )}
//     </>
//   );
// }

// export default Navbar;

// ==========================================
