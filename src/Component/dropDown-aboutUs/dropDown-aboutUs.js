
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
    // <div className="dropdown-container" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
    //   <div className="dropdown-selected-option">{selectedOption}</div>
    //   {showOptions && (
    //     <ul className="about-dropdown-options" id="dropping-link-aboutUs">

    //       <li className="dropdown-option" id="droppingAbout     dropping_our_story"> <NavLink to="/Our-Story" className="nav-link-dropdown" > Our-Story </NavLink> 
    //    </li>
    //       <li className="dropdown-option"  id="droppingAbout    dropping_our_commitment"><NavLink to="/Our commitment" className="about-nav-link-dropdown" > Our-Commitment </NavLink> </li>

    //       <li className="dropdown-option"  id="droppingAbout    dropping_FAQ"><NavLink to="/FAQ's" className="about-nav-link-dropdown" > FAQ's </NavLink> </li>

    //     </ul>
    //   )}
    // </div>


    <div className="dropdown-container-about" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
      <div className="dropdown-selected-option-about">{selectedOption}</div>
      {showOptions && (
        <ul className="dropdown-options-about" id="about-dropping-link">
          <li className="dropdown-option-about   "  id="about__option_our_story"> <NavLink to="/our-story" className="about-nav-link-dropdown" > Our-Story </NavLink> 
       </li>
          <li className="dropdown-option-about   " id="about__option_our_commitment" ><NavLink to="/our-commitment" className="about-nav-link-dropdown" > Our-Commitment </NavLink> </li>

          <li className="dropdown-option-about"  id="about__option_FAQ"><NavLink to="/faq" className="about-nav-link-dropdown" > FAQ's </NavLink> </li>

        </ul>
      )}
    </div>
  );
}


export default DropdownShop;

