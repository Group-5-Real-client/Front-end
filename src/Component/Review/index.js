import Slider from "react-slick";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = ({ data }) => {
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(data.length, 3),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10%",
        },
      },

      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "34%",
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} style={{ width: "100%", height: "100%" }}>
        {data &&
          data.map((product) =>
            product.reviews.length > 0
              ? product.reviews.map((review) => {
                  console.log(
                    "rating:",
                    review.rating,
                    "floor:",
                    Math.floor(review.rating)
                  );
                  return (
                    <div className="Review" key={review._id}>
                      <div className="review-card">
                        <div className="spr-review">
                          <span className="spr-review-header-byline">
                            <strong>user name</strong>{" "}
                          </span>
                          <div className="spr-review-header">
                            <h3 className="spr-review-header-title">
                              {product.name}
                            </h3>
                            <div className="rating">
                              {[...Array(5)].map((_, index) => (
                                <span
                                  className={`star ${
                                    index < Math.floor(review.rating)
                                      ? "filled"
                                      : ""
                                  }`}
                                  key={index}
                                >
                                  <FontAwesomeIcon icon={faStar} />
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="spr-review-content">
                            <p className="spr-review-content-body">
                              {review.message}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : null
          )}
      </Slider>
      {data && !data.some((product) => product.reviews.length > 0) && (
        <p>No reviews for this product yet.</p>
      )}
    </>
  );
};
export default ReviewCard;
