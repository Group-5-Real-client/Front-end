import { useState, useEffect } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/shopBag.jpg";
import DropdownShop from "../dropDown-shop/dropDown-shop";
import DropdownAboutUs from "../dropDown-aboutUs/dropDown-aboutUs";
import DropdownContact from "../dropDown-contact/dropDown-contact";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      // add the 'blur' class to the html element and prevent scrolling
      document.documentElement.classList.add("blur");
      document.documentElement.style.overflow = "hidden";
    } else {
      // remove the 'blur' class and restore scrolling
      document.documentElement.classList.remove("blur");
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <section className="parentNavbar">
      <nav id="nav-whole-nav" className="nav-links-container">
        <button className="menu-toggle" onClick={handleMenuClick}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="menu-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
          )}
        </button>

        <div className="navs__links">
          <DropdownShop />
          <DropdownAboutUs />
          <NavLink
            to="/event"
            className="nav__nav nav-link navEvent"
            onClick={handleLinkClick}>
            Events
          </NavLink>
          <Link
            to="/Contact"
            id="nav-Contact"
            className="nav__nav"
            onClick={handleLinkClick}>
            <DropdownContact />
          </Link>
        </div>

        <div className="nav-logo">
          <Link className="nav-logo-title" to="/" onClick={handleLinkClick}>
            <span className="nav-title">Rooted</span>
          </Link>
        </div>

        <div className="login-shop-icon">
          <Link
            to="/Login"
            id="nav-Login"
            className="nav__nav nav-link"
            onClick={handleLinkClick}>
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
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className="menu-toggle" onClick={handleMenuClick}>
          {isOpen ? (
            <FontAwesomeIcon icon={faTimes} className="menu-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="menu-icon" />
          )}
        </button>
        <div className={`mobile-menu__items ${isOpen ? "" : "hidden"}`}>
          <DropdownShop />
          <DropdownAboutUs />
          <Link
            to="/event"
            className="mobile-menu__item nav-link navEvent"
            onClick={handleLinkClick}>
            Events
          </Link>
          <Link
            to="/Contact"
            id="nav-Contact"
            className="mobile-menu__item nav-link"
            onClick={handleLinkClick}>
            <DropdownContact />
          </Link>
          <FontAwesomeIcon className="iconFace" icon={faUser} />

          <Link
            to="/Login"
            className="mobile-menu__item nav-link   login"
            onClick={handleLinkClick}>
            Login
          </Link>
        </div>
      </div>
    </section>
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
// import DropdownContact from "../dropDown-contact/dropDown-contact";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

// function Navbar() {
//   return (
//     <section className="parentNavbar">
//       <nav  id="nav-whole-nav" className="nav-links-container">
//         <main class="hamburger-menu">
//           <input id="menu__toggle" type="checkbox" />
//           <label class="menu__btn" for="menu__toggle">
//             <span></span>
//           </label>

//           <ul class="menu__box">
//             <li className="">
//               <NavLink className="nav-link ">
//                 <DropdownShop className="dropDown-shop    menu__item" />
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="nav-link menu__item">
//                 <DropdownAboutUs className="dropDown-about" />
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/event" className="nav-link  navEvent menu__item">
//                 Events
//               </NavLink>
//             </li>
//             <li>
//               <Link
//                 to="/Contact"
//                 id="nav-Contact"
//                 className="nav-link menu__item">
//                  <DropdownContact className="dropDown-contact" />
//               </Link>
//             </li>

//             <li className="_persone_link_icon">
//               <FontAwesomeIcon icon={faUser} />

//               <Link to="/Login" id="nav-Login_mobile" className="nav-link">
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </main>

//     <section className="navs__links  ">
//       <NavLink className="nav__nav">
//         <DropdownShop className="dropDown-shop" />
//       </NavLink>

//       <NavLink className="nav__nav">
//         <DropdownAboutUs className="dropDown-about" />
//       </NavLink>

//       <NavLink to="/event" className="nav__nav  nav-link  navEvent">
//         Events
//       </NavLink>

//       <Link to="/Contact" id="nav-Contact" className="nav__nav  ">
//       <DropdownContact className="dropDown-contact" />
//       </Link>
//     </section>

//     <div className="nav-logo">
//       <Link className="nav-logo-title " to="/">
//         <span className="nav-title">Rooted</span>
//       </Link>
//     </div>

//     <div className="login-shop-icon">
//       {/* <SearchBar className="searchBar" /> */}
//       <Link to="/Login" id="nav-Login" className="nav__nav  nav-link">
//         Login
//       </Link>

//       <img
//         className="shop-icon"
//         src={Logo}
//         width="25"
//         height="25"
//         alt="shop icon"
//       />
//     </div>
//   </nav>
// </section>
//   );
// }

// export default Navbar;
