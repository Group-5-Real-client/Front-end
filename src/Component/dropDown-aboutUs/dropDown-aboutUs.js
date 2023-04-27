import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";

function DropdownAboutUs() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState("About-Us");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsCollapsed(true);
  };

  return (
    <div
      className="accordion-container-about"
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <div className="accordion-header-about">
        {selectedOption}
        <span className="accordion-icon-about">{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && (
        <ul className="accordion-content-about">
          <li className="accordion-option-about">
            <NavLink
              to="/Our-story"
              className="about-nav-link-accordion  Our-story__link"
              onClick={() => handleOptionChange("About-Us")}
              onMouseEnter={() => setIsCollapsed(false)}
            >
              Our Story
            </NavLink>
          </li>

          <li className="accordion-option-about">
            <NavLink
              to="/Our-Commitment"
              className="about-nav-link-accordion Our-Commitment__link"
              onClick={() => handleOptionChange("About-Us")}
              onMouseEnter={() => setIsCollapsed(false)}
            >
              Our Commitment
            </NavLink>
          </li>

          <li className="accordion-option-about">
            <NavLink
              to="/FAQ"
              className="about-nav-link-accordion FAQ__link"
              onClick={() => handleOptionChange("About-Us")}
              onMouseEnter={() => setIsCollapsed(false)}
            >
              FAQ's
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownAboutUs;
// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./index.css";




// function DropdownShop() {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("About-US");

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setShowOptions(false);
//   };

//   return (
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


//     <div className="dropdown-container-about" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
//       <div className="dropdown-selected-option-about">{selectedOption}</div>
//       {showOptions && (
//         <ul className="dropdown-options-about" id="about-dropping-link">
//           <li className="dropdown-option-about   "  id="about__option_our_story"> <NavLink to="/our-story" className="about-nav-link-dropdown" > Our-Story </NavLink> 
//        </li>
//           <li className="dropdown-option-about   " id="about__option_our_commitment" ><NavLink to="/our-commitment" className="about-nav-link-dropdown" > Our-Commitment </NavLink> </li>

//           <li className="dropdown-option-about"  id="about__option_FAQ"><NavLink to="/faq" className="about-nav-link-dropdown" > FAQ's </NavLink> </li>

//         </ul>
//       )}
//     </div>
//   );
// }


// export default DropdownShop;

