import React, { useState } from "react";
import "./index.css";
import ReviewCard from "../../Component/Review/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [mainImage, setMainImage] = useState(
    "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261"
  );

  const images = [
    "https://istyle.com.lb/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/e/aeen-iphone_se3_productred_pdp_image_position-1a_1_1.jpg",
    "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
    "https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261",
  ];
  const sizes = ["Small", "Medium", "Large"];
  const productInfo = [
    {
      name: "Product Name",
      price: "16$",
      rating: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  const handleClick = (image) => {
    setMainImage(image);
  };

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
  return (
    <div className="single-product-page">
      <div className="row">
        <div className="img-product">
          <div id="img-holder">
            <img
              src={mainImage}
              alt="Main product image"
              height="700hv"
              width="600px"
            />
          </div>
          <div className="related-images">
            {images.map((image, index) => (
              <img
                src={image}
                key={index}
                alt={`Related image ${index}`}
                onClick={() => handleClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="column">
          <div className="product-description">
            <h1>{productInfo[0].name}</h1>
            <p>{productInfo[0].price}</p>
            <div className="rating">
              {[...Array(productInfo[0].rating)].map((_, index) => (
                <span className="star" key={index}>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              ))}
              {[...Array(5 - productInfo[0].rating)].map((_, index) => (
                <span className="star" key={index + productInfo[0].rating}>
                  &#9734;
                </span>
              ))}
              <p>1 review</p>
            </div>
          </div>
          <p>{productInfo[0].description}</p>
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
                onChange={(event) => setQuantity(parseInt(event.target.value))}
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

      <div id="shopify-product-reviews">
        <div className="spr-container">
          <div className="spr-header">
            <h2 className="spr-header-title">Customer Reviews</h2>
            <div className="spr-summary">
              <div className="rate">
                <div className="rating">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9734;</span>
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
              <form className="new-review-form">
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
                          name="rating3"
                          id="rating3-none"
                          value="0"
                          type="radio"
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
                          name="rating3"
                          id="rating3-1"
                          value="1"
                          type="radio"
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
                          name="rating3"
                          id="rating3-2"
                          value="2"
                          type="radio"
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
                          name="rating3"
                          id="rating3-3"
                          value="3"
                          type="radio"
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
                          name="rating3"
                          id="rating3-4"
                          value="4"
                          type="radio"
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
                          name="rating3"
                          id="rating3-5"
                          value="5"
                          type="radio"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group input-container">
                    <textarea
                      className="input-review"
                      type="text"
                      name="review"
                      required={true}
                      id="review"
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
              </form>
            </div>
          </div>
        )}
        <ReviewCard />
      </div>
    </div>
  );
}

export default ProductPage;
