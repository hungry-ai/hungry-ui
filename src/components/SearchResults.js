import { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import Pagination from "./Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Restaurant = ({ name, thumbnails }) => (
  <Card style={{ marginBottom: 16 }}>
    <Row className="g-0">
      <Col md="auto">
        <Carousel style={{ width: 240, height: 240 }}>
          {thumbnails.map((url, index) => (
            <Carousel.Item key={index}>
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

const sampleResults = [
  {
    name: "Little Asia",
    thumbnails: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/C9mGUTu3v8Od96GWVfNtcQ/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/z1BjT-snZhPfhBoXI46m0w/348s.jpg",
    ],
  },
  {
    name: "Everyday Noodles",
    thumbnails: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/khvTYhE9avLGf0s8tdvFeQ/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/zvtGoP-oMUlproYL2f8Flw/348s.jpg",
    ],
  },
  {
    name: "Pink Box",
    thumbnails: [
      "https://s3-media0.fl.yelpcdn.com/bphoto/9B8snlzvzwXOZ77oBP6COw/348s.jpg",
      "https://s3-media0.fl.yelpcdn.com/bphoto/NSLCZiM4FGvg-XZEpD3Zbg/348s.jpg",
    ],
  },
];

const SearchResults = ({ restaurants }) => {
  const [allResults, setAllResults] = useState([]);
  const [page, setPage] = useState(0);
  const resultsPerPage = 10;

  return (
    <div>
      <h1>Search results</h1>
      {allResults.length > 0 ? (
        <>
          {allResults
            .slice(page * resultsPerPage, (page + 1) * resultsPerPage)
            .map((result, index) => (
              <Restaurant
                name={result.name}
                thumbnails={result.thumbnails}
                key={index}
              />
            ))}
          <Pagination
            totalPages={Math.ceil(allResults.length / resultsPerPage)}
            width={4}
            setPage={setPage}
          />
        </>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

// TODO: use google-map-react
// TODO: sort/filter results
// TODO: turn off default carousel scrolling
// TODO: resizing bug when zoom in too far

export default SearchResults;
