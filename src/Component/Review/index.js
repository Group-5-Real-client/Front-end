
import Slider from 'react-slick';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const reviews = [
    {
      id: 1,
      rating: 4,
      productname: " product name",
      user: "John Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      id: 2,
      rating: 5,
      productname: " product name",
     user: "Jane Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      rating: 5,
      productname: "product name",
     user: "Jane Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 4,
      rating: 5,
      productname: "product name",
     user: "Jane Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 5,
      rating: 5,
      productname: "product name",
     user: "Jane Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];
  

     
      return (
        
        <div className="Review">
          <Slider {...settings} style={{ width: "100%",height:"100%"}}>
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="spr-review">
              <span className="spr-review-header-byline"><strong>{review.user}</strong> </span>
                <div className="spr-review-header">
                <h3 className="spr-review-header-title">{review.productname}</h3>
                  <div className="rating">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span className="star" key={i}>&#9733;</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <span className="star" key={i + review.rating}>&#9734;</span>
                    ))}
                  </div>
                </div> 
      
                <div className="spr-review-content">
                  <p className="spr-review-content-body">{review.message}</p>
                </div>
      
              </div>
            </div>
          
          ))}
          </Slider>
        </div>
      
      );
      

  };
export default ReviewCard  