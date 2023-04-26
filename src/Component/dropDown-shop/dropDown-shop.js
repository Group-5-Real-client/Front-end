
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
    <div className="dropdown-container-shop" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <div className="dropdown-selected-option-shop">{selectedOption}</div>
      {showOptions && (
        <ul className="dropdown-options-shop" id="shop-dropping-link">
          <li className="dropdown-option-shop   "  id="shop__option_category"> <NavLink to="/Category" className="shop-nav-link-dropdown" > Category </NavLink> 
       </li>
          <li className="dropdown-option-shop   " id="shop__option_product" ><NavLink to="/Product" className="shop-nav-link-dropdown" > Product </NavLink> </li>
        </ul>
      )}
    </div>
  );
}


export default DropdownShop;

