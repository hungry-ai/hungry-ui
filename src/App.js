import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import SearchResults from "./components/SearchResults";
import About from "./components/About";
import Alert from "react-bootstrap/Alert";
import { loadRestaurants, loadReviews, loadStats } from "./services/search";

const App = () => {
  // TODO: get initial state from a query string, if applicable
  const [find, setFind] = useState("");
  const [location, setLocation] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");

  const [restaurants, setRestaurants] = useState("");
  const [reviews, setReviews] = useState("");
  const [stats, setStats] = useState("");
  const [showHome, setShowHome] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const [isRestaurantsPending, setIsRestaurantsPending] = useState(true);
  const [isReviewsPending, setIsReviewsPending] = useState(true);
  const [isStatsPending, setIsStatsPending] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  function onSearch(find, location, instagramUsername) {
    setSearchParams({
      find: find,
      location: location,
      instagramUsername: instagramUsername,
    });
    alert("changed");
    setShowHome(false);
    setIsRestaurantsPending(true);
    loadRestaurants(find, location, instagramUsername)
      .then((restaurants) => setRestaurants(restaurants))
      .finally(() => setIsRestaurantsPending(false));

    if (instagramUsername) {
      setShowAlert(false);

      setIsReviewsPending(true);
      loadReviews(instagramUsername)
        .then((reviews) => setReviews(reviews))
        .finally(() => setIsReviewsPending(false));

      setIsStatsPending(true);
      loadStats(instagramUsername)
        .then((stats) => setStats(stats))
        .finally(() => setIsStatsPending(false));
    } else {
      setShowAlert(true);

      setIsReviewsPending(false);
      setReviews(null);

      setIsStatsPending(false);
      setStats(null);
    }
  }

  return (
    <div className="App" style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <SearchBar onSearch={onSearch} />
      </div>
      {showHome ? (
        <About />
      ) : (
        <>
          {showAlert && (
            <Alert
              variant="info"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Enter your Instagram username for more personalized
              recommendations!
            </Alert>
          )}
          <div style={{ marginBottom: 24 }}>
            <SearchResults
              restaurants={restaurants}
              isPending={isRestaurantsPending}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <Reviews reviews={reviews} isPending={isReviewsPending} />
          </div>
          <Stats stats={stats} isPending={isStatsPending} />
        </>
      )}
    </div>
  );
};

export default App;

// TODO: get initial state from a query string, if applicable
