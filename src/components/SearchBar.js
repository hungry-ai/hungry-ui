import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { FaMapMarkerAlt, FaAt, FaSearch, FaPizzaSlice } from "react-icons/fa";

const SearchBar = () => (
  <Navbar>
    <Navbar.Brand>Hungry AI</Navbar.Brand>
    <InputGroup>
      <InputGroup.Text>
        <FaPizzaSlice />
      </InputGroup.Text>
      <Form.Control placeholder="tacos, cheap dinner, Max's" />
      <InputGroup.Text id="basic-addon1">
        <FaMapMarkerAlt />
      </InputGroup.Text>
      <Form.Control
        placeholder="neighborhood, city, zip code"
        style={{ maxWidth: 280 }}
      />
      <InputGroup.Text id="basic-addon1">
        <FaAt />
      </InputGroup.Text>
      <Form.Control placeholder="instagram" style={{ maxWidth: 200 }} />
      <Button variant="primary" type="submit">
        <FaSearch />
      </Button>
    </InputGroup>
  </Navbar>
);

export default SearchBar;
