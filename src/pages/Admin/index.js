import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { loadAllReviews } from "../../services/search";
// import { loadAllReviews } from "../../services/searchTest";

const Review = ({ url, username, rating, timestamp, onLoad, onError }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Row className={!visible && "d-none"}>
      <Col>
        <img
          src={url}
          height={280}
          onLoad={() => {
            setVisible(true);
            onLoad();
          }}
          onError={onError}
          id={`${username}_${timestamp}_${rating}`}
          alt={`${username}_${timestamp}_${rating}`}
        />
      </Col>
      <Col>
        <p>Username: {username}</p>
        <p>Timestamp: {timestamp}</p>
      </Col>
    </Row>
  );
};

const ReviewsRow = ({ reviews, rating }) => {
  const [validReviews, _] = useState(
    reviews.filter(
      (review) =>
        review.rating === rating && review.username !== `i.rate.${rating}`
    )
  );
  const [numLoading, setNumLoading] = useState(validReviews.length);
  const [numLoaded, setNumLoaded] = useState(0);

  const onLoad = () => {
    setNumLoading((x) => x - 1);
    setNumLoaded((x) => x + 1);
  };

  const onError = () => {
    setNumLoading((x) => x - 1);
  };

  return (
    <>
      <h2>Rating: {rating}</h2>
      {numLoading === 0 && numLoaded === 0 && (
        <p>No reviews with rating {rating}.</p>
      )}
      {numLoading > 0 && (
        <Container style={{ textAlign: "center", marginBottom: 16 }}>
          <Spinner animation="border" />
        </Container>
      )}
      {validReviews.map((review, index) => (
        <Review
          url={review.url}
          username={review.username}
          timestamp={review.timestamp}
          rating={rating}
          onLoad={onLoad}
          onError={onError}
          key={index}
        />
      ))}
    </>
  );
};

const Admin = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadAllReviews()
      .then((reviews) => {
        setReviews(reviews);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Container className="my-5">
      <h1>Admin</h1>
      {isLoading ? (
        <Container style={{ textAlign: "center", marginBottom: 16 }}>
          <Spinner animation="border" />
        </Container>
      ) : (
        Array.from({ length: 5 }).map((_, index) => (
          <ReviewsRow reviews={reviews} rating={index + 1} key={index} />
        ))
      )}
    </Container>
  );
};

export default Admin;
