import { useState, useEffect } from "react";
import "./Reviews.css";
import Review from "./Review";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const ReviewsListItem = ({ url, stars, processed, onLoad, onError }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Col
      style={{ marginBottom: 16 }}
      className={(!processed || !visible) && "d-none"}
    >
      <Review
        url={url}
        stars={stars}
        onLoad={() => {
          setVisible(true);
          onLoad();
        }}
        onError={onError}
      />
    </Col>
  );
};

const ReviewsList = ({ reviews }) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [numLoading, setNumLoading] = useState(6);
  const [numProcessed, setNumProcessed] = useState(0);

  const [processedReviews, setProcessedReviews] = useState(reviews.slice(0, 6));

  const load = () => {
    setNumLoading((x) => x + 6);
    setProcessedReviews((x) => [
      ...x,
      ...reviews.slice(x.length, x.length + 6),
    ]);
  };

  const onLoad = () => {
    console.log("loaded");
    setNumLoaded((x) => x + 1);
    setNumLoading((x) => x - 1);
  };

  const onError = () => {
    console.log("erred");
    setProcessedReviews((x) => [
      ...x,
      ...reviews.slice(x.length, x.length + 1),
    ]);
  };

  useEffect(() => {
    if (numLoading == 0 || processedReviews.length == reviews.length)
      setNumProcessed(processedReviews.length);
  }, [numLoading, processedReviews]);

  return (
    <>
      {numLoaded == 0 && processedReviews.length == reviews.length && (
        <p>No reviews found.</p>
      )}
      <Row xs={2} md={3} lg={6}>
        {processedReviews.map((review, index) => (
          <ReviewsListItem
            url={review.url}
            stars={review.rating}
            processed={index < numProcessed}
            onLoad={onLoad}
            onError={onError}
            key={index}
          />
        ))}
      </Row>
      {numLoading > 0 && processedReviews.length < reviews.length && (
        <Container style={{ textAlign: "center", marginBottom: 16 }}>
          <Spinner animation="border" />
        </Container>
      )}
      {
        <div className="d-grid">
          <Button
            variant="primary"
            disabled={
              numLoading > 0 || processedReviews.length == reviews.length
            }
            onClick={load}
          >
            Load more...
          </Button>
        </div>
      }
    </>
  );
};

const Reviews = ({ reviews, isPending }) =>
  (isPending || reviews != null) && (
    <>
      <h1>My reviews</h1>
      {isPending ? (
        <Container style={{ textAlign: "center" }}>
          <Spinner animation="border" />
        </Container>
      ) : (
        <ReviewsList reviews={reviews} />
      )}
    </>
  );

export default Reviews;
