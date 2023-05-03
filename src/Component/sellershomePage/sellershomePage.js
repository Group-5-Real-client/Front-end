import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";

const arraySeller = [
  {
    src: "https://placekitten.com/350/250",
    alt: "Cat 1",
    name: "Product 1",
    category: "Category 1",
    price: "$45.95",
    percent: "30%",
  },
  {
    src: "https://placekitten.com/350/250",
    alt: "Cat 2",
    name: "Product 2",
    category: "Category 2",
    price: "$20.95",
    percent: "70%",
  },
  {
    src: "https://placekitten.com/350/250",
    alt: "Cat 3",
    name: "Product 3",
    category: "Category 3",
    price: "$12.50",
    percent: "84%",
  },
  {
    src: "https://placekitten.com/350/250",
    alt: "Cat 4",
    name: "Product 4",
    category: "Category 4",
    price: "$12.50",
    percent: "97%",
  },
];

function sellershomePage() {
  
  return (
    <>
      <main className="about_parent-seller">
        <hr className="about_hr-seller" />
        <div className="about_container-seller">
          <section className="about_our_blog_container-seller">
            <div className="about_title_blog-seller">
              <h2 className="ourBloc_title-seller">Best Sellers</h2>
            </div>

            <div className="about_mission_container-seller">
              {arraySeller.map((product, index) => (
                <div className="mission_box-seller" key={index}>
                  <img
                    className="about_img-seller"
                    src={product.src}
                    alt={product.alt}
                  />
                  <div className="product-category-seller">
                    <span className="product-name-seller">{product.name}</span>
                    <span className="category-name-seller">
                      {product.category}
                    </span>
                  </div>
                  <div className="boxes___container-seller">
                    <span className="pay-value-seller value___for_two">
                      {product.price}
                    </span>
                    <span className="percentage-value-seller value___for_two">
                      {product.percent}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default sellershomePage;
