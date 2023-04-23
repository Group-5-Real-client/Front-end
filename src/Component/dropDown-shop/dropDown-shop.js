
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";





function DropdownShop() {
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
        <ul className="dropdown-options" id="dropping-link">
          <li className="dropdown-option   "  id="shop-option"> <NavLink to="/Category" className="nav-link-dropdown" > Categories </NavLink> 
       </li>
          <li className="dropdown-option   " id="shop-option" ><NavLink to="/Product" className="nav-link-dropdown" > Products </NavLink> </li>
        </ul>
      )}
    </div>
  );
}


export default DropdownShop;

