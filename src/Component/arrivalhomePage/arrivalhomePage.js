import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import "./index.css";
function ArrivalhomePage() {
  const [arrayArrival, setArrayArrival] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/Product").then((response) => {
        setArrayArrival(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {" "}
      <main className="about_parent">
        {" "}
        <hr className="about_hr" />{" "}
        <div className="about_container">
          {" "}
          <section className="about_title_content">
            {" "}
            <div className="home_author_image_container">
              {" "}
              <img
                className="about_img_parent"
                src="https://www.greatersudbury.ca/sites/sudburyen/cache/file/ADFB3959-ECC6-D83C-68F9F2F21E291CEE_carouselimage.jpg"
                alt="cat"
              />{" "}
            </div>{" "}
            <div className="about_child_container">
              {" "}
              <p className="about_title">
                {" "}
                The largest community of photo enthusiasts{" "}
              </p>{" "}
              <p className="about_paragraph">
                {" "}
                Learn about all the features of the Photo app{" "}
              </p>{" "}
            </div>{" "}
          </section>{" "}
          <section className="about_our_blog_container">
            {" "}
            <div className="about_title_blog">
              {" "}
              <h2 className="ourBloc_title">New Arrivals</h2>{" "}
            </div>{" "}
            <div className="about_mission_container">
              {" "}
              {arrayArrival.slice(0.4).map((item, index) => (
                <div className="mission_box " key={index}>
                  {" "}
                  <img
                    className="about_img"
                    src={item.src}
                    alt={item.alt}
                  />{" "}
                  <span className="pay-value">{item.price}</span>{" "}
                  <div className="product-category">
                    {" "}
                    <span className="product-name">{item.name}</span>{" "}
                    <span className="category-name">{item.category}</span>{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </main>{" "}
    </>
  );
}
export default ArrivalhomePage; // import React, { useState, useEffect } from "react"; // import { NavLink, Link } from "react-router-dom"; // import "./index.css"; // const arrayArrival = [ //   { //     src: "https://placekitten.com/350/250", //     alt: "Cat 1", //     name: "Product 1", //     category: "Category 1", //     price: "$45.95", //   }, //   { //     src: "https://placekitten.com/350/250", //     alt: "Cat 2", //     name: "Product 2", //     category: "Category 2", //     price: "$20.95", //   }, //   { //     src: "https://placekitten.com/350/250", //     alt: "Cat 3", //     name: "Product 3", //     category: "Category 3", //     price: "$12.50", //   }, //   { //     src: "https://placekitten.com/350/250", //     alt: "Cat 4", //     name: "Product 4", //     category: "Category 4", //     price: "$12.50", //   }, // ]; // function ArrivalhomePage() { //   return ( //     <> //       <main className="about_parent"> //         <hr className="about_hr" /> //         <div className="about_container"> //           <section className="about_title_content"> //             <div className="home_author_image_container"> //               <img //                 className="about_img_parent" //                 src="https://placekitten.com/550/400" //                 alt="cat" //               /> //             </div> //             <div className="about_child_container"> //               <p className="about_title"> //                 The largest community of photo enthusiasts //               </p> //               <p className="about_paragraph"> //                 Learn about all the features of the Photo app //               </p> //             </div> //           </section> //           <section className="about_our_blog_container"> //             <div className="about_title_blog"> //               <h2 className="ourBloc_title">New Arrivals</h2> //             </div> //             <div className="about_mission_container"> //               {arrayArrival.map((item, index) => ( //                 <div className="mission_box " key={index}> //                   <img //                     className="about_img" //                     src={item.src} //                     alt={item.alt} //                   /> //                   <span className="pay-value">{item.price}</span> //                   <div className="product-category"> //                     <span className="product-name">{item.name}</span> //                     <span className="category-name">{item.category}</span> //                   </div> //                 </div> //               ))} //             </div> //           </section> //         </div> //       </main> //     </> //   ); // } // export default ArrivalhomePage;
