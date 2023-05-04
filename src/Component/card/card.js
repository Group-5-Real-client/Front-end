import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function addtoCard() {
  return (
    <>
      <FontAwesomeIcon icon={faStore} />
    </>
  );
}

export default addtoCard;
