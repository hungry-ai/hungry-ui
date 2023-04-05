import { useState, useTransition } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import SearchResults from "./components/SearchResults";
import About from "./components/About";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

const App = () => {
  // TODO: get initial state from a query string, if applicable
  //const [find, setFind] = useState("");
  //const [location, setLocation] = useState("");
  //const [instagramUsername, setInstagramUsername] = useState("");

  const [restaurants, setRestaurants] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [stats, setStats] = useState(null);

  const [isPending, startTransition] = useTransition();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="App" style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <SearchBar setSearchParams={setSearchParams} />
      </div>
      {isPending ? (
        <Container style={{ textAlign: "center" }}>
          <Spinner animation="border" />
        </Container>
      ) : restaurants == null && reviews == null && stats == null ? (
        <div>
          <About />
        </div>
      ) : (
        <>
          {restaurants != null && (
            <div style={{ marginBottom: 24 }}>
              <SearchResults restaurants={restaurants} />
            </div>
          )}
          {reviews != null && (
            <div style={{ marginBottom: 24 }}>
              <Reviews reviews={reviews} />
            </div>
          )}
          {stats != null && (
            <div>
              <Stats stats={stats} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
