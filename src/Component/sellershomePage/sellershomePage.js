// import React, { useState, useEffect }from "react";
// import { NavLink, Link } from "react-router-dom";
// import axios from "axios"; // import "./index.css";
// function SellershomePage() {
//   const [arraySeller, setArraySeller] = useState([]);
//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/category");
//       console.log(response.data);
//       setArraySeller(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     fetchCategories();
//   }, []);
//   const [showMore1, setShowMore1] = useState(false);
//   const [showMore2, setShowMore2] = useState(false);
//   const [showMore3, setShowMore3] = useState(false);
//   const toggleShowMore1 = () => {
//     setShowMore1(!showMore1);
//   };
//   const toggleShowMore2 = () => {
//     setShowMore2(!showMore2);
//   };
//   const toggleShowMore3 = () => {
//     setShowMore3(!showMore3);
//   };
//   return (
//     <>
//       <main className="about_parent-seller">
//         <hr className="about_hr-seller" />
//         <div className="about_container-seller">
//           <section className="about_our_blog_container-seller">
//             <div className="about_title_blog-seller">
//               <h2 className="ourBloc_title-seller">Best Sellers</h2>
//             </div>
//             <div className="about_mission_container-seller">
//               {arraySeller.slice(0.4).map((category, index) => (
//                 <div className="mission_box-seller" key={index}>
//                   <img
//                     className="about_img-seller"
//                    src= {category.image}
//                     alt={category.alt}
//                   />
//                   <div className="product-category-seller">
//                     <span className="product-name-seller">{category.name}</span>
//                     <span className="category-name-seller">
//                       {category.Category}
//                     </span>
//                   </div>
//                   <div className="boxes___container-seller">
//                     <span className="pay-value-seller value___for_two">
//                       {category.price}
//                     </span>
//                     <span className="percentage-value-seller value___for_two">
//                       {category.description}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//         <div className="aboutUs-section-seller aboutUs-blog-seller">
//           <h2 className="ourBlog-seller">Our Blog</h2>
//           <p>Blog content goes here</p>
//         </div>
//         <div className="aboutUs-section-seller  aboutUs-card-container1-seller">
//           <div className="aboutUs-card1-seller">
//             <h3>How to Reduce Waste in Your Kitchen</h3>
//             <h4>Tips for a Zero-Waste Kitchen</h4>
//             <p>
//               {" "}
//               {showMore1
//                 ? "Looking for ways to reduce waste in your kitchen? We've got you covered. From reusable containers and bags to composting and meal planning, there are many simple steps you can take to minimize your environmental footprint. In this blog post, we'll share our top tips for creating a zero-waste kitchen that is both eco-friendly and functional." /
//                : "Looking for ways to reduce waste in your kitchen? We've..."}
//               <button onClick={toggleShowMore1} className="btn-readmore-seller">
//                 {showMore1 ? "Read less" : "Read more"}
//               </button>
//             </p>
//           </div>
//           <div className="aboutUs-card1-seller">
//             <h3>The Benefits of Using Natural Personal Care Products</h3>
//             <h4>Why You Should Switch to Natural Products</h4>
//             <p>
//               {showMore2
//                 ? "Did you know that many personal care products contain harmful chemicals that can be harmful to your health and the environment? Fortunately, there is a growing movement towards using natural and organic products that are free from synthetic chemicals and toxins. In this blog post, we'll explore the benefits of using natural personal care products and how they can help you live a healthier, more sustainable lifestyle."
//                 : "Did you know that many personal care products contain..."}
//               <button onClick={toggleShowMore2} className="btn-readmore-seller">
//                 {showMore2 ? "Read less" : "Read more"}
//               </button>
//             </p>
//           </div>
//           <div className="aboutUs-card1-seller">
//             <h3>How to Make a Positive Impact on the Planet</h3>
//             <h4>Simple Steps for a Sustainable Life</h4>
//             <p>
//               {showMore3
//                 ? "Living a sustainable lifestyle doesn't have to be difficult or expensive. In fact, there are many simple steps you can take to reduce your environmental impact and create a better future for the planet. From reducing waste and conserving energy to supporting sustainable businesses and investing in renewable resources, there are many ways to make a positive impact on the planet. In this blog post, we'll share our top tips for living a more sustainable life and making a difference in the world."
//                 : "Living a sustainable lifestyle doesn't have to be difficult..."}
//               <button onClick={toggleShowMore3} className="btn-readmore-seller">
//                 {showMore3 ? "Read less" : "Read more"}
//               </button>
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
// export default SellershomePage;


import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
const arraySeller = [
  {
    src: "https://www.tift-admin.com/wp-content/uploads/2013/08/TIFTEditorials_HeroImages_UltimateList-1100x707.jpg",
    alt: "Cat 1",
    name: "Product 1",
    category: "Category 1",
    price: "$45.95",
    percent: "30%",
  },
  {
    src: "https://www.greenqueen.com.hk/wp-content/uploads/2020/09/zero-waste-life-freepik.jpg",
    alt: "Cat 2",
    name: "Product 2",
    category: "Category 2",
    price: "$20.95",
    percent: "70%",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/1721/9289/articles/pantry_easter_2_1024x1024.jpg?v=1604791904",
    alt: "Cat 3",
    name: "Product 3",
    category: "Category 3",
    price: "$12.50",
    percent: "84%",
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0023/6316/2681/articles/Zero_Waste_Lifestyle_1200x.jpg?v=1653057529",
    alt: "Cat 4",
    name: "Product 4",
    category: "Category 4",
    price: "$12.50",
    percent: "97%",
  },
];
function SellershomePage() {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const [showMore3, setShowMore3] = useState(false);
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
      {" "}
      <main className="about_parent-seller">
        {" "}
        <hr className="about_hr-seller" />{" "}
        <div className="about_container-seller">
          {" "}
          <section className="about_our_blog_container-seller">
            {" "}
            <div className="about_title_blog-seller">
              {" "}
              <h2 className="ourBloc_title-seller">Best Sellers</h2>{" "}
            </div>{" "}
            <div className="about_mission_container-seller">
              {" "}
              {arraySeller.map((product, index) => (
                <div className="mission_box-seller" key={index}>
                  {" "}
                  <img
                    className="about_img-seller"
                    src={product.src}
                    alt={product.alt}
                  />{" "}
                  <div className="product-category-seller">
                    {" "}
                    <span className="product-name-seller">
                      {product.name}
                    </span>{" "}
                    <span className="category-name-seller">
                      {" "}
                      {product.category}{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="boxes___container-seller">
                    {" "}
                    <span className="pay-value-seller value___for_two">
                      {" "}
                      {product.price}{" "}
                    </span>{" "}
                    <span className="percentage-value-seller value___for_two">
                      {" "}
                      {product.percent}{" "}
                    </span>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
        {/* Part 3: Blog section */}{" "}
        <div className="aboutUs-section-seller aboutUs-blog-seller">
          {" "}
          <h2 className="ourBlog-seller">Our Blog</h2>{" "}
          <p>Blog content goes here</p>{" "}
        </div>{" "}
        {/* Part 4: Three cards */}{" "}
        <div className="aboutUs-section-seller  aboutUs-card-container1-seller">
          {" "}
          <div className="aboutUs-card1-seller">
            {" "}
            <h3>How to Reduce Waste in Your Kitchen</h3>{" "}
            <h4>Tips for a Zero-Waste Kitchen</h4>{" "}
            <p>
              {" "}
              {showMore1
                ? "Looking for ways to reduce waste in your kitchen? We've got you covered. From reusable containers and bags to composting and meal planning, there are many simple steps you can take to minimize your environmental footprint. In this blog post, we'll share our top tips for creating a zero-waste kitchen that is both eco-friendly and functional."
                : "Looking for ways to reduce waste in your kitchen? We've..."}{" "}
              <button onClick={toggleShowMore1} className="btn-readmore-seller">
                {" "}
                {showMore1 ? "Read less" : "Read more"}{" "}
              </button>{" "}
            </p>{" "}
          </div>{" "}
          <div className="aboutUs-card1-seller">
            {" "}
            <h3>The Benefits of Using Natural Personal Care Products</h3>{" "}
            <h4>Why You Should Switch to Natural Products</h4>{" "}
            <p>
              {" "}
              {showMore2
                ? "Did you know that many personal care products contain harmful chemicals that can be harmful to your health and the environment? Fortunately, there is a growing movement towards using natural and organic products that are free from synthetic chemicals and toxins. In this blog post, we'll explore the benefits of using natural personal care products and how they can help you live a healthier, more sustainable lifestyle."
                : "Did you know that many personal care products contain..."}{" "}
              <button onClick={toggleShowMore2} className="btn-readmore-seller">
                {" "}
                {showMore2 ? "Read less" : "Read more"}{" "}
              </button>{" "}
            </p>{" "}
          </div>{" "}
          <div className="aboutUs-card1-seller">
            {" "}
            <h3>How to Make a Positive Impact on the Planet</h3>{" "}
            <h4>Simple Steps for a Sustainable Life</h4>{" "}
            <p>
              {" "}
              {showMore3
                ? "Living a sustainable lifestyle doesn't have to be difficult or expensive. In fact, there are many simple steps you can take to reduce your environmental impact and create a better future for the planet. From reducing waste and conserving energy to supporting sustainable businesses and investing in renewable resources, there are many ways to make a positive impact on the planet. In this blog post, we'll share our top tips for living a more sustainable life and making a difference in the world."
                : "Living a sustainable lifestyle doesn't have to be difficult..."}{" "}
              <button onClick={toggleShowMore3} className="btn-readmore-seller">
                {" "}
                {showMore3 ? "Read less" : "Read more"}{" "}
              </button>{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}
export default SellershomePage;
