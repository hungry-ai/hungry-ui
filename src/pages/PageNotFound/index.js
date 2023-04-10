import Container from "react-bootstrap/Container";

const PageNotFound = () => (
  <Container className="d-flex justify-content-md-center align-items-center vh-100">
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: 16 }}>Oops!</h1>
      <p>Page not found.</p>
    </div>
  </Container>
);

export default PageNotFound;
