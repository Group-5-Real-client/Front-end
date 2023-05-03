import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./index.css";

function DropdownContact() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Contact");

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
      className="accordion-container-contact"
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
      <div className="accordion-header-contact">
        {selectedOption}
        <span className="accordion-icon-contact">{isCollapsed ? "+" : "-"}</span>
      </div>
      {!isCollapsed && (
        <ul className="accordion-content-contact">
         <li className="accordion-option-contact">
            <NavLink
              to="/FAQ"
              className="contact-nav-link-accordion       __FAQ__link"
              onClick={() => handleOptionChange("Contact")}
            >
              FAQ's
            </NavLink>
          </li>

       
        </ul>
      )}
    </div>
  );
}

export default DropdownContact;