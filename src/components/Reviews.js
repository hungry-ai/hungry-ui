import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Pagination from "react-bootstrap/Pagination";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";

const GoldStar = () => (
  <IconContext.Provider value={{ color: "FFD700" }}>
    <FaStar />
  </IconContext.Provider>
);

const Review = ({ url, rating }) => (
  <Card>
    <Card.Img variant="top" src={url} width={240} height={240} />
    <Card.ImgOverlay className="d-flex align-items-end justify-content-end">
      {Array.from({ length: rating }, (_, i) => i).map((el) => (
        <GoldStar key={el} />
      ))}
    </Card.ImgOverlay>
  </Card>
);

const Reviews = () => (
  <div>
    <h1>My reviews</h1>
    <CardGroup style={{ marginBottom: 16 }}>
      <Review
        url="https://s3-media0.fl.yelpcdn.com/bphoto/Xeh88cmJFeKnwkN9xk_x5A/o.jpg"
        rating={5}
      />
      <Review
        url="https://s3-media0.fl.yelpcdn.com/bphoto/CKX73QPlH1HJ75XaHVtWew/o.jpg"
        rating={3}
      />
      <Review
        url="https://s3-media0.fl.yelpcdn.com/bphoto/wBGVdyMMDLshWeXxvVdZaA/o.jpg"
        rating={4}
      />
      <Review
        url="https://s3-media0.fl.yelpcdn.com/bphoto/hBVZcjwf3bTTpQruc6OxKA/o.jpg"
        rating={1}
      />
      <Review
        url="https://s3-media0.fl.yelpcdn.com/bphoto/fAqSxbkmAt-jbbTxN4h77Q/o.jpg"
        rating={2}
      />
    </CardGroup>
    <Pagination className="d-flex justify-content-center">
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
    </Pagination>
  </div>
);

// TODO: handle when small number of reviews

export default Reviews;
