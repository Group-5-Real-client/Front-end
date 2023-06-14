import Navbar from "../navbar/navbar";
import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import CustomSlider from "./custom.slider";
import images from "./images";
import "./index.css";
import "./custom.slider.css";
// import img1 from "../../images/pic_1.jpg";
// import img2 from "../../images/pic_1.jpg";
// import img3 from "../../images/pic_1.jpg";

function HeroSectionHome() {
  return (
    <>
      <section className="home_hero_body">
        <main className="">
          <div className="App">
            <CustomSlider>
              {images.map((image, index) => {
                return (
                  <img
                    className="image-hero-section"
                    key={index}
                    src={image.imgURL}
                    alt={image.imgAlt}
                  />
                );
              })}
            </CustomSlider>
          </div>

          <div className="home_wrap_bottom">
            <span className="zero-waste-text">Zero waste</span>
            <p className="home_hero_text">welcome to our community</p>

            <div className="btn-wrapper">
              <Link
                to="/register"
                className="home_hero_link     home_hero_link_button">
                Join Today
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default HeroSectionHome;
