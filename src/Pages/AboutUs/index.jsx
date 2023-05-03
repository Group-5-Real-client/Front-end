
import React ,{ useState } from "react";
import "./index.css";
import khaled from "../AboutUs/khaled.png";
import bg1 from "../AboutUs/bg1.jpg";
import wasteproduct from "../AboutUs/wasteproduct.jpg";

const adminMembers = [
  {
    name: "admin member 1",
    description: "Description of admin member 1",
    image: khaled
  },
  {
    name: "admin member 2",
    description: "Description of admin member 2",
    image: khaled
  },
  {
    name: "admin member 3",
    description: "Description of admin member 3",
    image: khaled
  }
];
function AboutUs() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2,setShowMore2]=useState(false);
  const [showMore3,setShowMore3]=useState(false);
  const toggleShowMore1 = () => {
    setShowMore1(!showMore1);
  };
  const toggleShowMore2 = () => {
    setShowMore2(!showMore2);
  };
  const toggleShowMore3 = () => {
    setShowMore3(!showMore3);
  };
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
            At Bint el Dayaa's, we believe that living a sustainable lifestyle is not only good for the planet, but also for our health and well-being. Our journey started with a simple idea - to reduce waste in our daily lives. We wanted to create a space where people could find everything they need to live a zero-waste lifestyle. From food and mouneh to personal hygiene products, we have carefully curated a collection of products that are not only eco-friendly but also ethically sourced. In addition to our online store, we also have a work space where we host workshops and events to raise awareness about the importance of sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Part 3: Blog section */}
      <div className="aboutUs-section aboutUs-blog">
        <h2>Our Blog</h2>
        <p>Blog content goes here</p>
      </div>

      {/* Part 4: Three cards */}
  <div className="aboutUs-section aboutUs-card-container1">
        <div className="aboutUs-card1">
          <h3>How to Reduce Waste in Your Kitchen</h3>
          <h4>Tips for a Zero-Waste Kitchen</h4>
          <p> {showMore1
              ? "Looking for ways to reduce waste in your kitchen? We've got you covered. From reusable containers and bags to composting and meal planning, there are many simple steps you can take to minimize your environmental footprint. In this blog post, we'll share our top tips for creating a zero-waste kitchen that is both eco-friendly and functional."
              : "Looking for ways to reduce waste in your kitchen? We've..."}
            <button onClick={toggleShowMore1} className="btn-readmore">
              {showMore1 ? "Read less" : "Read more"}
            </button></p>
        </div>
        <div className="aboutUs-card1">
          <h3>The Benefits of Using Natural Personal Care Products</h3>
          <h4>Why You Should Switch to Natural Products</h4>
          <p>{showMore2
              ? "Did you know that many personal care products contain harmful chemicals that can be harmful to your health and the environment? Fortunately, there is a growing movement towards using natural and organic products that are free from synthetic chemicals and toxins. In this blog post, we'll explore the benefits of using natural personal care products and how they can help you live a healthier, more sustainable lifestyle."
              : "Did you know that many personal care products contain..."}
            <button onClick={toggleShowMore2} className="btn-readmore">
              {showMore2 ? "Read less" : "Read more"}
            </button></p>
        </div>
        <div className="aboutUs-card1">
          <h3>How to Make a Positive Impact on the Planet</h3>
          <h4>Simple Steps for a Sustainable Life</h4>
          <p>{showMore3
              ? "Living a sustainable lifestyle doesn't have to be difficult or expensive. In fact, there are many simple steps you can take to reduce your environmental impact and create a better future for the planet. From reducing waste and conserving energy to supporting sustainable businesses and investing in renewable resources, there are many ways to make a positive impact on the planet. In this blog post, we'll share our top tips for living a more sustainable life and making a difference in the world."
              : "Living a sustainable lifestyle doesn't have to be difficult..."}
            <button onClick={toggleShowMore3} className="btn-readmore">
              {showMore3 ? "Read less" : "Read more"}
            </button></p>
        </div>
      </div>



      {/* Part 5: Team section */}
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


        