import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import "./Reviews.css";
import Review from "./Review";
import Pagination from "../Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const sampleReviews = [
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
  {
    url: "https://s3-media0.fl.yelpcdn.com/bphoto/fAqSxbkmAt-jbbTxN4h77Q/o.jpg",
    rating: 2,
  },
];

const Reviews = ({ reviews }) => {
  const [allReviews, setAllReviews] = useState(sampleReviews);
  const [page, setPage] = useState(0);
  const resultsPerPage = 5;

  return (
    <div>
      <h1>My reviews</h1>
      {allReviews.length > 0 ? (
        <>
          <Row style={{ marginBottom: 16 }}>
            {Array.from({ length: resultsPerPage }).map((_, index) => (
              <Col>
                {page * resultsPerPage + index < allReviews.length && (
                  <Review
                    url={allReviews[page * resultsPerPage + index].url}
                    stars={allReviews[page * resultsPerPage + index].rating}
                    key={index}
                  />
                )}
              </Col>
            ))}
          </Row>
          <Pagination
            totalPages={Math.ceil(allReviews.length / resultsPerPage)}
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

export default Reviews;
