import { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import "./Reviews.css";
import Review from "./Review";
import Pagination from "../Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

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

const Reviews = ({ reviews, isPending }) => {
  const [page, setPage] = useState(0);
  const resultsPerPage = 5;

  return (
    (isPending || Array.isArray(reviews)) && (
      <>
        <h1>My reviews</h1>
        {isPending ? (
          <Container style={{ textAlign: "center" }}>
            <Spinner animation="border" />
          </Container>
        ) : reviews.length > 0 ? (
          <>
            <Row style={{ marginBottom: 16 }}>
              {Array.from({ length: resultsPerPage }).map((_, index) => (
                <Col key={index}>
                  {page * resultsPerPage + index < reviews.length && (
                    <Review
                      url={reviews[page * resultsPerPage + index].url}
                      stars={reviews[page * resultsPerPage + index].rating}
                    />
                  )}
                </Col>
              ))}
            </Row>
            <Pagination
              totalPages={Math.ceil(reviews.length / resultsPerPage)}
              width={4}
              setPage={setPage}
            />
          </>
        ) : (
          <p>No reviews found.</p>
        )}
      </>
    )
  );
};

export default Reviews;
