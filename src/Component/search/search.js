

import React, { useState , useEffect} from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./search.css";

function SearchBar() {


  return (
    <>
      <div className="search-button">
        <Link
          id="search-button"
          className="nav-link  fas fa-search"
          >
          Search
        </Link>

        {/* <FontAwesomeIcon icon={faSearch} className="searchIcon" /> */}

      
      </div>

   

    </>
  );
}

export default SearchBar;

