import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import "./index.css";

function Categories() {
  const arrayCategories = [
    {
      src: "https://imgurl.ir/uploads/d366681_food_1.png",
      alt: "Category1",
      name: "Food name 1",
      numberName: "Number of product",
      number: "1",
    },
    {
      src: "https://imgurl.ir/uploads/z2039_food_2.png",
      alt: "Category2",
      name: "Food name 2",
      numberName: "Number of product",
      number: "2",
    },
    {
      src: "https://imgurl.ir/uploads/g310036_food_3.png",
      alt: "Category3",
      name: "Food name 3",
      numberName: "Number of product",
      number: "3",
    },
    {
      src: "https://imgurl.ir/uploads/f17589_food_4.png",
      alt: "Category4",
      name: "Food name 4",
      numberName: "Number of product",
      number: "4",
    },
    {
      src: "https://imgurl.ir/uploads/y100183_food_5.png",
      alt: "Category5",
      name: "Food name 5",
      numberName: "Number of product",
      number: "5",
    },
    {
      src: "https://imgurl.ir/uploads/y81670_food_6.png",
      alt: "Category6",
      name: "Food name 6",
      numberName: "Number of product",
      number: "6",
    },
    {
      src: "https://imgurl.ir/uploads/01298_food_7.png",
      alt: "Category7",
      name: "Food name 7",
      numberName: "Number of product",
      number: "7",
    },
    {
      src: "https://imgurl.ir/uploads/j13695_food_8.png",
      alt: "Category8",
      name: "Food name 8",
      numberName: "Number of product",
      number: "8",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <main id="slider">
      <section className="slider-container">
        <div className="slider">
          <h2 className="ourCategory">Our Categories</h2>
          <Slider {...settings} style={{ width: "100%", height: "100%" }}>
            {arrayCategories.map((category, index) => (
              <NavLink to="/Product" className="slider-item" key={index}>
                <div className="slider-item">
                  <nav className="slide">
                    <figure className="slide-image">
                      <img src={category.src} alt={category.alt} />
                    </figure>
                    <h4 className="slide-name">{category.name}</h4>
                    <div className="custom-line"></div>
                    <div className="row-category   rowBox">
                      <p className="numberName">{category.numberName}</p>
                      <p className="numberPrice">{category.number}</p>
                    </div>
                  </nav>
                </div>
              </NavLink>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
}

export default Categories;
