import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";

function DropdownShop() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Shop");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsCollapsed(true);
  };

  return (
    <div
      className="accordion-container-shop"
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <div className="accordion-header-shop">
        {selectedOption}
        <span className="accordion-icon-shop">{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && (

        
        <ul className="accordion-content-shop">
          <li className="accordion-option-shop">
            <NavLink
              to="/Home_made"
              className="shop-nav-link-accordion Home_made__link"
              onClick={() => handleOptionChange("Shop")}
              onMouseEnter={() => setIsCollapsed(false)}
            >
              Home-made
            </NavLink>
          </li>

          <li className="accordion-option-shop">
            <NavLink
              to="/Recycle"
              className="shop-nav-link-accordion Recycle__link"
              onClick={() => handleOptionChange("Shop")}
              onMouseEnter={() => setIsCollapsed(false)}
            >
              Recycle
            </NavLink>
          </li>

          <li className="accordion-option-shop">
            <NavLink
              to="/Hygiene"
              className="shop-nav-link-accordion Hygiene__link"
              onClick={() => handleOptionChange("Shop")}
              onMouseEnter={() => setIsCollapsed(false)}
            >
              Hygiene
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownShop;





// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./index.css";

// function DropdownShop() {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [selectedOption, setSelectedOption] = useState("Shop");

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setIsCollapsed(true);
//   };

//   return (
//     <div className="accordion-container-shop"
//     onMouseEnter={() => setIsCollapsed(false)}
//     onMouseLeave={() => setIsCollapsed(true)}
//     >




//       <div
//         className="accordion-header-shop"
//         onClick={() => setIsCollapsed(!isCollapsed)}
//       >
//         {selectedOption}
//         <span className="accordion-icon-shop">
//           {isCollapsed ? "+" : "-"}
//         </span>
//       </div>
//       {!isCollapsed && (
//         <ul className="accordion-content-shop">
//           <li className="accordion-option-shop">
//             <NavLink
//               to="/Home_made"
//               className="shop-nav-link-accordion  Home_made__link"
//               onClick={() => handleOptionChange("Shop")}
//             >
//               Home-made
//             </NavLink>
//           </li>

//           <li className="accordion-option-shop">
//             <NavLink
//               to="/Recycle"
//               className="shop-nav-link-accordion   Recycle__link"
//               onClick={() => handleOptionChange("Shop")}
//             >
//               Recycle
//             </NavLink>
//           </li>

//           <li className="accordion-option-shop">
//             <NavLink
//               to="/Hygiene"
//               className="shop-nav-link-accordion  Hygiene__link"
//               onClick={() => handleOptionChange("Shop")}
//             >
//               Hygiene
//             </NavLink>
//           </li>
    
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DropdownShop;



// ========+++++++++++===============//





// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./index.css";





// function DropdownShop() {
//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("Shop");

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setShowOptions(false);
//   };

//   return (
//     <div className="dropdown-container-shop" onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
//       <div className="dropdown-selected-option-shop">{selectedOption}</div>
//       {showOptions && (
//         <ul className="dropdown-options-shop" id="shop-dropping-link">
//           <li className="dropdown-option-shop   "  id="shop__option_category"> <NavLink to="/Category" className="shop-nav-link-dropdown" > Category </NavLink> 
//        </li>
//           <li className="dropdown-option-shop   " id="shop__option_product" ><NavLink to="/Product" className="shop-nav-link-dropdown" > Product </NavLink> </li>
//         </ul>
//       )}
//     </div>
//   );
// }


// export default DropdownShop;

