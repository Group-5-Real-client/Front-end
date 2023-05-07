import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";

function DropdownAboutUs() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState("About-Us");

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
      className="accordion-container-about"
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
      <div className="accordion-header-about">
        <NavLink to="About" className="nav__nav nav-link navEvent">
        {selectedOption}
        </NavLink>
        <span className="accordion-icon-about">{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && (
        <ul className="accordion-content-about">
          <li className="accordion-option-about">
            <NavLink
              to="/about"
              className="about-nav-link-accordion  Our-story__link"
              onClick={() => handleOptionChange("About-Us")}
            >
              Our Story
            </NavLink>
          </li>

          {/* <li className="accordion-option-about">
            <NavLink
              to="/Our-Commitment"
              className="about-nav-link-accordion Our-Commitment__link"
              onClick={() => handleOptionChange("About-Us")}
            >
              Our Commitment
            </NavLink>
          </li> */}

          {/* <li className="accordion-option-about">
            <NavLink
              to="/FAQ"
              className="about-nav-link-accordion FAQ__link"
              onClick={() => handleOptionChange("About-Us")}
            >
              FAQ's
            </NavLink>
          </li> */}
        </ul>
      )}
    </div>
  );
}

export default DropdownAboutUs;










// import React, { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./index.css";

// function DropdownAboutUs() {
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [selectedOption, setSelectedOption] = useState("About-Us");

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     setIsCollapsed(true);
//   };

//   return (
//     <div
//       className="accordion-container-about"
//       onMouseEnter={() => setIsCollapsed(false)}
//       onMouseLeave={() => setIsCollapsed(true)}
//     >
//       <div className="accordion-header-about">
//         {selectedOption}
//         <span className="accordion-icon-about">{isCollapsed ? "+" : "-"}</span>
//       </div>
//       {!isCollapsed && (
//         <ul className="accordion-content-about">
//           <li className="accordion-option-about">
//             <NavLink
//               to="/Our-story"
//               className="about-nav-link-accordion  Our-story__link"
//               onClick={() => handleOptionChange("About-Us")}
//               onMouseEnter={() => setIsCollapsed(false)}
//             >
//               Our Story
//             </NavLink>
//           </li>

//           <li className="accordion-option-about">
//             <NavLink
//               to="/Our-Commitment"
//               className="about-nav-link-accordion Our-Commitment__link"
//               onClick={() => handleOptionChange("About-Us")}
//               onMouseEnter={() => setIsCollapsed(false)}
//             >
//               Our Commitment
//             </NavLink>
//           </li>

//           <li className="accordion-option-about">
//             <NavLink
//               to="/FAQ"
//               className="about-nav-link-accordion FAQ__link"
//               onClick={() => handleOptionChange("About-Us")}
//               onMouseEnter={() => setIsCollapsed(false)}
//             >
//               FAQ's
//             </NavLink>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default DropdownAboutUs;
