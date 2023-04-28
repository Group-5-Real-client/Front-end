import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import "./index.css";

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
              <div className="mission_box-seller   ">
                <img
                  className="about_img-seller  img___one"
                  src="https://placekitten.com/430/350"
                  alt="cat"
                />
             
                <div className="product-category-seller">
                  <span className="product-name-seller">Product Name</span>
                  <span className="category-name-seller">CATEGORY</span>
                </div>

                <div className="boxes___container-seller">
                  <span className="pay-value-seller    value___for_two">$45.95</span>
                  <span className="percentage-value-seller   value___for_two">-40%</span>
                </div>
              </div>

              <section className="mission_box-seller ">
                <img
                  className="about_img-seller   img___two"
                  src="https://placekitten.com/430/350"
                  alt="cat"
                />
               

                <div className="product-category-seller">
                  <span className="product-name-seller">Product Name</span>
                  <span className="category-name-seller">CATEGORY</span>
                </div>

                <div className="boxes___container-seller">
                  <span className="pay-value-seller   value___for_two">$45.95</span>
                  <span className="percentage-value-seller  value___for_two">-40%</span>
                </div>
              </section>




              <section className="mission_box-seller ">
                <img
                  className="about_img-seller   img___three"
                  src="https://placekitten.com/430/350"
                  alt="cat"
                />
               

                <div className="product-category-seller">
                  <span className="product-name-seller">Product Name</span>
                  <span className="category-name-seller">CATEGORY</span>
                </div>

                <div className="boxes___container-seller">
                  <span className="pay-value-seller   value___for_two">$45.95</span>
                  <span className="percentage-value-seller  value___for_two">-40%</span>
                </div>
              </section>

              
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default sellershomePage;

// import React, { useState, useEffect } from "react";
// import { NavLink, Link } from "react-router-dom";

// import "./index.css";

// function sellershomePage() {
//   return (
//     <>
//       <main className="about_parent-seller">
//         <hr className="about_hr-seller" />
//         <div className="about_container-seller">

//           <section className="about_our_blog_container-seller">
//             <div className="about_title_blog-seller">
//               <h2 className="ourBloc_title-seller">Best Sellers</h2>
//             </div>

//             <section className="about_mission_container-seller">
//               <div className="mission_box-seller first">
//                 <img
//                   className="about_img-seller-one     both___image"
//                   src="https://placekitten.com/500/350"
//                   alt="cat"
//                 />
//                 <div className="boxes___container">
//                   <span className="pay-value-seller">$ 45.95</span>
//                   <span className="percentage-value-seller">-40%</span>
//                 </div>

//                 <div className="product-category-seller">
//                   <span className="product-name-seller">Product Name</span>
//                   <span className="category-name-seller">CATEGORY</span>
//                 </div>
//               </div>
//               <div className="mission_box-seller   second">
//                 <img
//                   className="about_img-seller-second   both___image"
//                   src="https://placekitten.com/500/350"
//                   alt="cat"
//                 />
//                 <div className="boxes___container">
//                   <span className="pay-value-seller">$ 45.95</span>
//                   <span className="percentage-value-seller">-40%</span>
//                 </div>

//                 <div className="product-category-seller">
//                   <span className="product-name-seller">Product Name</span>
//                   <span className="category-name-seller">CATEGORY</span>
//                 </div>
//               </div>
//             </section>

//           </section>
//         </div>
//       </main>
//     </>
//   );
// }

// export default sellershomePage;
