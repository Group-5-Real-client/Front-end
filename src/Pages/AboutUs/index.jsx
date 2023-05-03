import React, { useState } from "react";
import "./index.css";
import khaled from "../AboutUs/khaled.png";
import bg1 from "../AboutUs/bg1.jpg";
import wasteproduct from "../AboutUs/wasteproduct.jpg";

const adminMembers = [
  {
    name: "admin member 1",
    description: "Description of admin member 1",
    image: khaled,
  },
  {
    name: "admin member 2",
    description: "Description of admin member 2",
    image: khaled,
  },
  {
    name: "admin member 3",
    description: "Description of admin member 3",
    image: khaled,
  },
];
function AboutUs() {
  return (
    <>
      {/* Part 1: Full screen image */}
      <div className="aboutUs-fullscreen-image">
        <img src={bg1} alt="Full screen background" />
      </div>

      {/* Part 2: Image with heading and paragraph */}
      <div className="aboutUs-section">
        <div className="aboutUs-image-with-heading">
          <img src={wasteproduct} alt="Image with heading" />
          <div className="aboutUs-image-text">
            <h2>Our Story</h2>
            <p>
              At Bint el Dayaa's, we believe that living a sustainable lifestyle
              is not only good for the planet, but also for our health and
              well-being. Our journey started with a simple idea - to reduce
              waste in our daily lives. We wanted to create a space where people
              could find everything they need to live a zero-waste lifestyle.
              From food and mouneh to personal hygiene products, we have
              carefully curated a collection of products that are not only
              eco-friendly but also ethically sourced. In addition to our online
              store, we also have a work space where we host workshops and
              events to raise awareness about the importance of sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Part 3: Team section */}
      <div className="aboutUs-section aboutUs-team">
        <h2>Our Team</h2>
        <p>Meet the talented individuals behind our success:</p>

        <div className="aboutUs-card-container">
          {adminMembers.map((member, index) => (
            <div className="aboutUs-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3 className="h3title">{member.name}</h3>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
