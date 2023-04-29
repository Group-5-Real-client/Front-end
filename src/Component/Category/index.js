import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import './index.css'

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <main id="slider">
      <section className="slider-container">
        <div className="slider">
          <Slider {...settings} style={{ width: "100%", height: "100%" }}>
            <NavLink to="/Product" className="slider-item">
              <div className="slider-item">
                <div className="slide">
                  <figure className="slide-image">
                    <img
                      src="https://imgurl.ir/uploads/d366681_food_1.png"
                      alt=""
                    />
                  </figure>
                  <h4 className="slide-name">Food Name</h4>
                  <div className="custom-line"></div>
                  <div className="row">
                    <p>Number of product</p>
                    <p>4 </p>
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/z2039_food_2.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/g310036_food_3.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/f17589_food_4.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/y100183_food_5.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/y81670_food_6.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/01298_food_7.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
            <NavLink to="/jjj" className="slider-item">
            <div className="slider-item">
              <div className="slide">
                <figure className="slide-image">
                  <img
                    src="https://imgurl.ir/uploads/j13695_food_8.png"
                    alt=""
                  />
                </figure>
                <h4 className="slide-name">Food Name</h4>
                <div className="custom-line"></div>
                <div className="row">
                  <p>Number of product</p>
                  <p>4 </p>
                </div>
              </div>
            </div>
            </NavLink>
          </Slider>
        </div>
      </section>
    </main>
  );
}

export default Categories;
