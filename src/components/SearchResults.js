import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pagination from "react-bootstrap/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Restaurant = ({ name, thumbnails = [] }) => (
  <Card style={{ marginBottom: 16 }}>
    <Row className="g-0">
      <Col md="auto">
        <Carousel style={{ width: 240, height: 240 }}>
          {thumbnails.map((url) => (
            <Carousel.Item>
              <img src={url} width={240} height={240} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
      <Col>
        <Card.Body>
          <h2>{name}</h2>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

const SearchResults = () => (
  <div>
    <h1>Search results</h1>
    <Restaurant
      name="Little Asia"
      thumbnails={[
        "https://s3-media0.fl.yelpcdn.com/bphoto/C9mGUTu3v8Od96GWVfNtcQ/348s.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/z1BjT-snZhPfhBoXI46m0w/348s.jpg",
      ]}
    />
    <Restaurant
      name="Everyday Noodles"
      thumbnails={[
        "https://s3-media0.fl.yelpcdn.com/bphoto/khvTYhE9avLGf0s8tdvFeQ/348s.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/zvtGoP-oMUlproYL2f8Flw/348s.jpg",
      ]}
    />
    <Restaurant
      name="Pink Box"
      thumbnails={[
        "https://s3-media0.fl.yelpcdn.com/bphoto/9B8snlzvzwXOZ77oBP6COw/348s.jpg",
        "https://s3-media0.fl.yelpcdn.com/bphoto/NSLCZiM4FGvg-XZEpD3Zbg/348s.jpg",
      ]}
    />
    <Pagination className="d-flex justify-content-center">
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
    </Pagination>
  </div>
);

// TODO: use google-map-react
// TODO: sort/filter results
// TODO: turn off default carousel scrolling

export default SearchResults;
