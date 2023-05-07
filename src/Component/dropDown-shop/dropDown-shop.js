import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";

function DropdownShop() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Shop");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (window.innerWidth < 768) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div
      className="accordion-container-shop"
      onMouseEnter={() => {
        if (window.innerWidth >= 768) {
          setIsCollapsed(false);
        }
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768) {
          setIsCollapsed(true);
        }
      }}
      onClick={handleClick}
    >
      <div className="accordion-header-shop">
        <NavLink to="/Product" className="nav__nav nav-link navEvent">
          {selectedOption}
        </NavLink>

        <span className="accordion-icon-shop">{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && (
        <ul className="accordion-content-shop">
          <li className="accordion-option-shop">
            <NavLink
              to="/Homemade"
              className="shop-nav-link-accordion  Home_made__link"
              onClick={() => handleOptionChange("Shop")}
            >
              Home-made
            </NavLink>
          </li>

          <li className="accordion-option-shop">
            <NavLink
              to="/Recycling"
              className="shop-nav-link-accordion Recycle__link"
              onClick={() => handleOptionChange("Shop")}
            >
              Recycle
            </NavLink>
          </li>

          <li className="accordion-option-shop">
            <NavLink
              to="Hygienic"
              className="shop-nav-link-accordion  Hygiene__link"
              onClick={() => handleOptionChange("Shop")}
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
//     <div
//       className="accordion-container-shop"
//       onMouseEnter={() => setIsCollapsed(false)}
//       onMouseLeave={() => setIsCollapsed(true)}
//     >
//       <div className="accordion-header-shop">
//         {selectedOption}
//         <span className="accordion-icon-shop">{isCollapsed ? "+" : "-"}</span>
//       </div>
//       {!isCollapsed && (

//         <ul className="accordion-content-shop">
//           <li className="accordion-option-shop">
//             <NavLink
//               to="/Home_made"
//               className="shop-nav-link-accordion Home_made__link"
//               onClick={() => handleOptionChange("Shop")}
//               onMouseEnter={() => setIsCollapsed(false)}
//             >
//               Home-made
//             </NavLink>
//           </li>

//           <li className="accordion-option-shop">
//             <NavLink
//               to="/Recycle"
//               className="shop-nav-link-accordion Recycle__link"
//               onClick={() => handleOptionChange("Shop")}
//               onMouseEnter={() => setIsCollapsed(false)}
//             >
//               Recycle
//             </NavLink>
//           </li>

//           <li className="accordion-option-shop">
//             <NavLink
//               to="/Hygiene"
//               className="shop-nav-link-accordion Hygiene__link"
//               onClick={() => handleOptionChange("Shop")}
//               onMouseEnter={() => setIsCollapsed(false)}
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
