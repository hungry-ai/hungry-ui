import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { FaMapMarkerAlt, FaAt, FaSearch, FaPizzaSlice } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [find, setFind] = useState(searchParams.get("find"));
  const [location, setLocation] = useState(searchParams.get("location"));
  const [instagramUsername, setInstagramUsername] = useState(
    searchParams.get("instagramUsername")
  );

  useEffect(() => {
    if (find || location || instagramUsername)
      onSearch(find, location, instagramUsername);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    setSearchParams(
      Object.fromEntries(
        Object.entries({
          find: find,
          location: location,
          instagramUsername: instagramUsername,
        }).filter(([_, v]) => v)
      )
    );

    onSearch(find, location, instagramUsername);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Navbar>
        <Navbar.Brand>Hungry AI</Navbar.Brand>
        <InputGroup>
          {/*
          <InputGroup.Text>
            <FaPizzaSlice />
          </InputGroup.Text>
          <Form.Control
            placeholder="pizza, Japanese, brunch"
            onChange={(e) => setFind(e.target.value)}
            defaultValue={searchParams.get("find")}
          />
        */}
          <InputGroup.Text id="basic-addon1">
            <FaMapMarkerAlt />
          </InputGroup.Text>
          <Form.Control
            placeholder="neighborhood, city, zip code"
            style={{ maxWidth: 280 }}
            onChange={(e) => setLocation(e.target.value)}
            defaultValue={searchParams.get("location")}
            pattern="[0-9]{5}"
            title="Zipcode must be a 5-digit number."
            required
          />
          <InputGroup.Text id="basic-addon1">
            <FaAt />
          </InputGroup.Text>
          <Form.Control
            placeholder="instagram"
            style={{ maxWidth: 200 }}
            onChange={(e) => setInstagramUsername(e.target.value)}
            defaultValue={searchParams.get("instagramUsername")}
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
