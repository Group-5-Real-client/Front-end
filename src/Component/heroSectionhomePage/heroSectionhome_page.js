import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { NavLink, Link } from "react-router-dom";
import "./index.css";
import img1 from "../../images/pic_1.jpg";
import img2 from "../../images/pic_2.jpg";
import img3 from "../../images/pic_3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



  return (
    <div className="hero-container">
      <div className="hero-section">
        {/* <Navbar className="navbarchild" /> */}
        <main>
          <section className="home_hero_section">
            <div className="home_hero_container home_hero_row">
              <div className="home_hero_wrap_top">
                <h1 className="home_hero_title">
                  <span className="home_hero_accent_one">The</span>{" "}
                  <span className="home_hero_accent_two">Rooted</span>
                </h1>
              </div>
              <div className="home_wrap_bottom">
                <p className="home_hero_text">welcome to our community</p>
                <div>
                  <Link
                    to="/register"
                    className="home_hero_link home_hero_link_button"
                  >
                    Join Today
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

     
    </div>
  );
}

export default HeroSectionHome;


// import Navbar from "../navbar/navbar";
// import React from "react";
// import Slider from "react-slick";
// import { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";
// import "./index.css";
// import img1 from "../../images/pic_1.jpg";
// import img2 from "../../images/pic_1.jpg";
// import img3 from "../../images/pic_1.jpg";

// function HeroSectionHome() {

//   return (
//     <>
//       <section className="home_hero_body">
//         <Navbar className="navbarchild" />

//         <main className="">
//           <section className="home_hero_section">

//             <div className="home_hero_container home_hero_row">
//               <div className="home_hero_wrap_top">
//                 <h1 className="home_hero_title">
//                   <span className="home_hero_accent_one">The</span>{" "}
//                   <span className="home_hero_accent_two">Rooted</span>
//                 </h1>
//               </div>
//               <div className="home_wrap_bottom">
//                 <p className="home_hero_text">welcome to our community</p>
//                 <div>
//                   <Link
//                     to="/register"
//                     className="home_hero_link  home_hero_link_button">
//                     Join Today
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </section>
//     </>
//   );
// }

// export default HeroSectionHome;
