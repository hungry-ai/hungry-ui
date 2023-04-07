import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { FaMapMarkerAlt, FaAt, FaSearch, FaPizzaSlice } from "react-icons/fa";

const SearchBar = ({
  defaultFind,
  defaultLocation,
  defaultInstagramUsername,
  setSearchParams,
}) => {
  const [find, setFind] = useState(defaultFind);
  const [location, setLocation] = useState(defaultLocation);
  const [instagramUsername, setInstagramUsername] = useState(
    defaultInstagramUsername
  );
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      find: find,
      location: location,
      instagramUsername: instagramUsername,
    });
  };

  return (
    //make onsubmit where you post form inputs into url in query string
    <Form onSubmit={onSubmit}>
      <Navbar>
        <Navbar.Brand>Hungry AI</Navbar.Brand>
        <InputGroup>
          <InputGroup.Text>
            <FaPizzaSlice />
          </InputGroup.Text>
          <Form.Control
            placeholder="pizza, Japanese, brunch"
            onChange={(e) => setFind(e.target.value)}
          />
          <InputGroup.Text id="basic-addon1">
            <FaMapMarkerAlt />
          </InputGroup.Text>
          <Form.Control
            placeholder="neighborhood, city, zip code"
            style={{ maxWidth: 280 }}
            onChange={(e) => setLocation(e.target.value)}
          />
          <InputGroup.Text id="basic-addon1">
            <FaAt />
          </InputGroup.Text>
          <Form.Control
            placeholder="instagram"
            style={{ maxWidth: 200 }}
            onChange={(e) => setInstagramUsername(e.target.value)}
          />
          <Button variant="primary" type="submit">
            <FaSearch />
          </Button>
        </InputGroup>
      </Navbar>
    </Form>
  );
};

export default SearchBar;
