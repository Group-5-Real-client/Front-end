import { useState } from 'react';
import './index.css';
import ReviewCard from '../../Component/Review/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
function ProductPage() {
  const [showForm, setShowForm] = useState(false);
  function handleWriteReview() {
    setShowForm(!showForm); 
  }
  return (
    <div className="single-product-page">
      <div className="row">
        <div className="img-product">
          <div id="img-holder">
            <img src='https://static-assets.glossier.com/production/spree/images/attachments/000/003/755/portrait_normal/LashSlick.jpg?1556563261'/>
          </div>
        </div>
        <div className="column">
          <div className='product-description'>
          <h1>Product Name</h1>
          <p>16$</p>
          <div class="rating">
  <span className="star">&#9733;</span>
  <span className="star">&#9733;</span>
  <span className="star">&#9733;</span>
  <span className="star">&#9733;</span>
  <span className="star">&#9734;</span>
  <p>1 review</p>
</div>

          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
                <button onClick={handleWriteReview} className="spr-summary-actions-newreview">
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
  <label className="spr-form-label" htmlFor="review[rating]">Rating</label>
  <div id="full-stars-example-two">
    <div className="rating-group">
      <input disabled checked className="rating__input rating__input--none" name="rating3" id="rating3-none" value="0" type="radio"/>
      <label aria-label="1 star" className="rating__label" htmlFor="rating3-1"><FontAwesomeIcon icon={faStar} className="rating__icon rating__icon--star" /></label>
      <input className="rating__input" name="rating3" id="rating3-1" value="1" type="radio"/>
      <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2"><FontAwesomeIcon icon={faStar} className="rating__icon rating__icon--star" /></label>
      <input className="rating__input" name="rating3" id="rating3-2" value="2" type="radio"/>
      <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3"><FontAwesomeIcon icon={faStar} className="rating__icon rating__icon--star" /></label>
      <input className="rating__input" name="rating3" id="rating3-3" value="3" type="radio"/>
      <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4"><FontAwesomeIcon icon={faStar} className="rating__icon rating__icon--star" /></label>
      <input className="rating__input" name="rating3" id="rating3-4" value="4" type="radio"/>
      <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5"><FontAwesomeIcon icon={faStar} className="rating__icon rating__icon--star" /></label>
      <input className="rating__input" name="rating3" id="rating3-5" value="5" type="radio"/>
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
            <input type="submit" className="spr-button spr-button-primary button button-primary  btn-primary" value="Submit Review"/>
            <input type="button" className="spr-button button btn" value="Cancel"/>
          </div>
        </form>
      </div>
    </div>
    
  
        
      )}
           <ReviewCard/>
    </div>
 

</div>


  );
}

export default ProductPage;

