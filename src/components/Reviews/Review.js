import Card from "react-bootstrap/Card";
import GoldStar from "./GoldStar";

const Review = ({ url, stars }) => (
  <Card>
    <Card.Img variant="top" src={url} width={240} height={240} />
    <Card.ImgOverlay className="d-flex align-items-end justify-content-end">
      {Array.from({ length: stars }, (_, i) => i).map((el) => (
        <GoldStar key={el} />
      ))}
    </Card.ImgOverlay>
  </Card>
);

export default Review;
