import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function AddToCard() {
  return (
    <>
      <nav className="parent-add-card">
        {/* <div>
          <div className="continue-shopping">
            <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <FontAwesomeIcon className="addCardIcon" icon={faStore} />
            <p>7</p>
          </div>
        </div> */}

        <section className="main-cart-section">
          <h3>shopping Cart</h3>
          {/* <p className="total-items">
            you have <span className="total-items-count">7</span> items in
            shoppingcart
          </p> */}

          <div className="cart-items">
          <FontAwesomeIcon
                    icon={faStore}
                    className="fas fa-minus minus"
                  />
            <div className="cart-items-container">
              <div className="items-info">
                <div className="product-img">
                  <img src="https://placekitten.com/70/70" alt="cat" />
                </div>

                <div className="title">
                  <h2>samsung s21</h2>
                  <p>black color</p>
                </div>
                <div className="add-minus-quanity">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="fas fa-minus minus"
                  />
                  <input type="text" placeholder="2" />
                  <FontAwesomeIcon icon={faMinus} className="fas fa-plus add" />
                </div>

                <div className="price">
                  <h3>2000rs</h3>
                </div>

                <div className="remove-item">
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="fas fa-trash-alt remove"
                  />
                </div>
              </div>

           

              <div className="card-total">
                <h3>
                  Cart Total : <span>2200rs</span>
                </h3>
                <button>checkout</button>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

export default AddToCard;
