import React from "react";
import "./index.css";
import ReviewCard from "../../Component/Review/index";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

import axios from "axios";
function ProductPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  console.log("User ID in AnotherPage:", userId);
  const { productId } = useParams();
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const allproductParam = searchParams.get("allproduct");
  // const allproduct = JSON.parse(allproductParam);
  // console.log(allproduct);
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [mainimage, setMainImage] = useState([]);
  // const [image, setImages] = useState([]);
  const [formData, setFormData] = useState({
    rating: "",
    message: "",
    Product: productId,
    User: userId,
  });
  const token = Cookies.get("jwt");
  console.log(token);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/product/${productId}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        setMainImage("http://localhost:4000/" + response.data.image);
        setLoading(false);
        const productNames = response.data.map((product) => product.name);
        console.log("Product names:", productNames);
        // handleProductFiltering(productNames);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [productId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!userId || !token) {
      navigate("/login");
      Swal.fire({
        title: "Please login before adding a review",
        icon: "warning",
        confirmButtonColor: "var(--button)",
      });
      return;
    }

    if (!formData.rating || !formData.message) {
      Swal.fire({
        title: "Please fill in all required fields",
        icon: "warning",
      });
      return;
    }

    axios
      .post(
        `http://localhost:4000/api/review`,
        {
          rating: formData.rating,
          message: formData.message,
          Product: productId,
          User: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setFormData({
          rating: "",
          message: "",
          Product: formData.Product,
          User: formData.User,
        });
        setIsReviewSubmitted(true);
        Swal.fire({
          title: "Your review has been submitted successfully. Thank you!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "var(--button)",
          iconColor: "var(--button)",
        });
      })
      .catch((error) => {
        if (error.response) {
          const errorMessage = error.response.data.message;
          console.log(errorMessage);
          Swal.fire({
            icon: "error",
            title: "Please login in again",
            text: errorMessage,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/login");
        } else {
          console.log(error.message);
          Swal.fire({
            icon: "error",
            title: "Review failed",
            text: error.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // const handleClick = (image) => {
  //   setMainImage(image);
  // };

  // const handleProductFiltering = (productName) => {
  //   console.log(`Product name: ${productName}`);
  //   console.table(allproduct);

  //   const productWithSameName = allproduct.find(product => {
  //     return product.name.trim().toLowerCase() === productName.trim().toLowerCase() && product._id !== productId;
  //   });

  //   console.dir(productWithSameName);

  // if (productWithSameName) {
  //  const Image = productWithSameName.image;
  //   console.log(`Image:`, Image);
  // } else {
  //   console.log('No matching product found in allproduct array.');
  // }

  //   return productWithSameName;
  // };

  // handleProductFiltering('Homemade product');

  const handleWriteReview = () => {
    setShowForm(!showForm);
  };

  const handleQuantityChange = (event) => {
    const currentValue = parseInt(quantity);
    if (event.target.classList.contains("plus")) {
      setQuantity(currentValue + 1);
    } else if (event.target.classList.contains("minus")) {
      setQuantity(currentValue > 1 ? currentValue - 1 : 1);
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleRatingChange = (event) => {
    const ratingValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      rating: ratingValue,
    }));
  };

  // const handleRatingChange = (event) => {
  //   setRating(event.target.value);
  // };

  return (
    <div className="single-product-page">
      {data.map((data) => (
        <div className="row">
          <div className="img-product">
            <div id="img-holder">
              <img
                src={"http://localhost:4000/" + data.image}
                // alt={data.name}
                height="700hv"
                width="600px"
              />
            </div>

            {/* <div className="related-images">
  {Image && (
    <img
      src={"http://localhost:4000/" + Image}
      alt="Related image"
      onClick={() => handleClick(mainimage)}
    />
  )}
</div> */}
          </div>
          <div className="column">
            <div className="product-description">
              <h1>{data.name}</h1>
              <p>${data.price}</p>
              {data.reviews.slice(0, 1).map((review) => (
                <div className="rating" key={review.id}>
                  {[...Array(5)].map((_, index) => (
                    <span
                      className={`star ${
                        index < Math.floor(review.rating) ? "filled" : ""
                      }`}
                      key={index}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <p>{data.description}</p>
            <div className="size-box">
              <div className="size-label">
                <label htmlFor="size">Size:</label>
              </div>
              <div className="size-options">
                <select
                  id="size-select"
                  value={size}
                  onChange={(event) => setSize(event.target.value)}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>
            </div>

            <div className="quantity-box">
              <div className="quantity-label">
                <label htmlFor="quantity">Quantity:</label>
              </div>
              <div className="quantity-bttn">
                <button
                  className="quantity-button minus"
                  onClick={(event) => handleQuantityChange(event)}
                >
                  -
                </button>
                <input
                  type="text"
                  className="quantity-input"
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(parseInt(event.target.value))
                  }
                />
                <button
                  className="quantity-button plus"
                  onClick={(event) => handleQuantityChange(event)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="price-button">Add to cart</button>
          </div>
        </div>
      ))}

      <div id="shopify-product-reviews">
        <div className="spr-container">
          <div className="spr-header">
            <h2 className="spr-header-title">Customer Reviews</h2>
            <div className="spr-summary">
              <div className="rate">
                <div className="rating">
                  <span className="STAR">&#9733;</span>
                  <span className="STAR">&#9733;</span>
                  <span className="STAR">&#9733;</span>
                  <span className="STAR">&#9733;</span>
                  <span className="STAR">&#9734;</span>
                </div>

                <div className="spr-summary-actions">
                  <button
                    onClick={handleWriteReview}
                    className="spr-summary-actions-newreview"
                  >
                    Write A Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="spr-content">
            <div className="spr-form">
              <form className="new-review-form" onSubmit={handleSubmit} t>
                <p className="spr-form-title">Write A Review</p>

                <div className="spr-form-review">
                  <div className="spr-form-review-rating">
                    <label className="spr-form-label" htmlFor="review[rating]">
                      Rating
                    </label>
                    <div id="full-stars-example-two">
                      <div className="rating-group">
                        <input
                          disabled
                          checked
                          className="rating__input rating__input--none"
                          name="rating"
                          id="rating3-none"
                          value="0"
                          type="radio"
                          required={true}
                          onChange={handleRatingChange}
                        />
                        <label
                          aria-label="1 star"
                          className="rating__label"
                          htmlFor="rating3-1"
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            className="rating__icon rating__icon--star"
                          />
                        </label>
                        <input
                          className="rating__input"
                          name="rating"
                          id="rating3-1"
                          value="1"
                          type="radio"
                          onChange={handleRatingChange}
                        />
                        <label
                          aria-label="2 stars"
                          className="rating__label"
                          htmlFor="rating3-2"
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            className="rating__icon rating__icon--star"
                          />
                        </label>
                        <input
                          className="rating__input"
                          name="rating"
                          id="rating3-2"
                          value="2"
                          type="radio"
                          required
                          onChange={handleRatingChange}
                        />
                        <label
                          aria-label="3 stars"
                          className="rating__label"
                          htmlFor="rating3-3"
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            className="rating__icon rating__icon--star"
                          />
                        </label>
                        <input
                          className="rating__input"
                          name="rating"
                          id="rating3-3"
                          value="3"
                          type="radio"
                          required={true}
                          onChange={handleRatingChange}
                        />
                        <label
                          aria-label="4 stars"
                          className="rating__label"
                          htmlFor="rating3-4"
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            className="rating__icon rating__icon--star"
                          />
                        </label>
                        <input
                          className="rating__input"
                          name="rating"
                          id="rating3-4"
                          value="4"
                          type="radio"
                          onChange={handleRatingChange}
                        />
                        <label
                          aria-label="5 stars"
                          className="rating__label"
                          htmlFor="rating3-5"
                        >
                          <FontAwesomeIcon
                            icon={faStar}
                            className="rating__icon rating__icon--star"
                          />
                        </label>
                        <input
                          className="rating__input"
                          name="rating"
                          id="rating3-5"
                          value="5"
                          type="radio"
                          onChange={handleRatingChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group input-container">
                    <textarea
                      className="input-review"
                      type="text"
                      name="message"
                      required={true}
                      id="review"
                      value={formData.message}
                      onChange={(event) =>
                        setFormData((prevState) => ({
                          ...prevState,
                          message: event.target.value,
                        }))
                      }
                    />

                    <label htmlFor="review" className="form-label">
                      Review
                    </label>
                  </div>
                </div>
                <div className="spr-form-actions">
                  <input
                    type="submit"
                    className="spr-button spr-button-primary button button-primary  btn-primary"
                    value="Submit Review"
                  />
                  <input
                    type="button"
                    className="spr-button button btn"
                    value="Cancel"
                  />
                </div>
                <div className="ReviewSubmitted ">
                  {isReviewSubmitted && (
                    <p>
                      <p>
                        Your review has been submitted successfully. Thank you!
                      </p>
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}

        <ReviewCard data={data} loading={loading} />
      </div>
    </div>
  );
}

export default ProductPage;
