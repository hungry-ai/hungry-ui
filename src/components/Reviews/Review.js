import Card from "react-bootstrap/Card";
import GoldStar from "./GoldStar";

const Review = ({ url, stars }) => (
  <Card>
    <Card.Img variant="top" height={280} className="thumbnail" src={url} />
    <Card.ImgOverlay className="d-flex align-items-end justify-content-end">
      {Array.from({ length: stars }).map((_, i) => (
        <GoldStar key={i} />
      ))}
    </Card.ImgOverlay>
  </Card>
);

export default Review;
