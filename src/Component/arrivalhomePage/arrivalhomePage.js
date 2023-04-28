import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "./index.css";

function ArrivalhomePage() {
  return (
    <>
      <main className="about_parent">
        <hr className="about_hr" />
        <div className="about_container">
            
          <section className="about_title_content">
            <div className="home_author_image_container">
              <img
                className="about_img_parent"
                src="https://placekitten.com/550/400"
                alt="cat"
              />
            </div>

            <div className="about_child_container">
              <p className="about_title">
                The largest community of photo enthusiasts
              </p>
              <p className="about_paragraph">
                Learn about all the features of the Photo app
              </p>
            </div>
          </section>


          <section className="about_our_blog_container">
            <div className="about_title_blog">
              <h2 className="ourBloc_title">New Arrivals</h2>
            </div>

            <div className="about_mission_container">
              <div className="mission_box ">
                <img
                  className="about_img   "
                  src="https://placekitten.com/350/250"
                  alt="cat"
                />
                <span className="pay-value">$45.95</span>

                <div className="product-category">
                <span className="product-name">Product Name</span>
                  <span className="category-name">CATEGORY</span>
                </div>
              </div>
              <div className="mission_box ">
                <img
                  className="about_img"
                  src="https://placekitten.com/350/250"
                  alt="cat"
                />
                <span className="pay-value">$45.95</span>

                <div className="product-category">
                <span className="product-name">Product Name</span>
                  <span className="category-name">CATEGORY</span>
                </div>
              </div>

              <div className="mission_box third">
                <img
                  className="about_img  "
                  src="https://placekitten.com/350/250"
                  alt="cat"
                />
                <span className="pay-value">$45.95</span>
                <div className="product-category">
                  <span className="product-name">Product Name</span>
                  <span className="category-name">CATEGORY</span>
                </div>
             </div>

             <div className="mission_box ">
                <img
                  className="about_img  "
                  src="https://placekitten.com/350/250"
                  alt="cat"
                />
                <span className="pay-value">$45.95</span>
                <div className="product-category">
                  <span className="product-name">Product Name</span>
                  <span className="category-name">CATEGORY</span>
                </div>
             </div>

            </div>
          </section>

         
        </div>
      </main>
    </>
  );
}

export default ArrivalhomePage;
