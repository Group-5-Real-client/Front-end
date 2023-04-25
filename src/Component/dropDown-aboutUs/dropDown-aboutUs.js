
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";




function DropdownShop() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("About-US");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <div className="dropdown-container" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <div className="dropdown-selected-option">{selectedOption}</div>
      {showOptions && (
        <ul className="dropdown-options" id="dropping-link-aboutUs">
          <li className="dropdown-option" id="droppingAbout"> <NavLink to="/Our-Story" className="nav-link-dropdown" > Our-Story </NavLink> 
       </li>
          <li className="dropdown-option"  id="droppingAbout"><NavLink to="/Our commitment" className="nav-link-dropdown" > Our-Commitment </NavLink> </li>

          <li className="dropdown-option"  id="droppingAbout"><NavLink to="/FAQ's" className="nav-link-dropdown" > FAQ's </NavLink> </li>

        </ul>
      )}
    </div>
  );
}


export default DropdownShop;

