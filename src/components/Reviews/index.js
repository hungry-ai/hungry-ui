import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import "./Reviews.css";
import Review from "./Review";
import Pagination from "../Pagination";

const Reviews = ({ reviews }) => {
  const [allReviews, setAllReviews] = useState([
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/Xeh88cmJFeKnwkN9xk_x5A/o.jpg",
      rating: 5,
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/CKX73QPlH1HJ75XaHVtWew/o.jpg",
      rating: 3,
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/wBGVdyMMDLshWeXxvVdZaA/o.jpg",
      rating: 4,
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/hBVZcjwf3bTTpQruc6OxKA/o.jpg",
      rating: 1,
    },
    {
      url: "https://s3-media0.fl.yelpcdn.com/bphoto/fAqSxbkmAt-jbbTxN4h77Q/o.jpg",
      rating: 2,
    },
  ]);
  const [page, setPage] = useState(0);

  return (
    <div>
      <h1>My reviews</h1>
      {allReviews.length > 0 ? (
        <>
          <CardGroup style={{ marginBottom: 16 }}>
            {allReviews.slice(page * 5, (page + 1) * 5).map((review, index) => (
              <Review url={review.url} stars={review.rating} key={index} />
            ))}
          </CardGroup>
          <Pagination
            totalPages={Math.ceil(allReviews.length / 5)}
            width={4}
            setPage={setPage}
          />
        </>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

// TODO: handle when small number of reviews
// TODO: make responsive when zoom in too far

export default Reviews;
