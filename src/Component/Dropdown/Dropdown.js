
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import "./Dropdown.css";

const menuButton = () => {
    document.getElementsByClassName("nav-container")[0].classList.toggle("nav-change");
    document.getElementsByClassName("nav-navigation")[0].classList.toggle("nav-show");
    document.getElementsByClassName("nav-whole-nav")[0].classList.toggle("nav-vertical");
  };



function Dropdown() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Shop");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="dropdown-container" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <div className="dropdown-selected-option">{selectedOption}</div>
      {showOptions && (
        <ul className="dropdown-options">
          <li className="dropdown-option" > <NavLink to="/Category" className="nav-link" onClick={menuButton}> Categories </NavLink> 
       </li>
          <li className="dropdown-option" ><NavLink to="/Product" className="nav-link" onClick={menuButton}> Products </NavLink> </li>
        </ul>
      )}
    </div>
  );
}


export default Dropdown;

