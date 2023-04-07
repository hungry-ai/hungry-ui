import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import SearchResults from "./components/SearchResults";
import About from "./components/About";
import Alert from "react-bootstrap/Alert";
import { loadRestaurants, loadReviews, loadStats } from "./services/search";

const App = () => {
  const [showHome, setShowHome] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const [restaurants, setRestaurants] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [stats, setStats] = useState(null);

  const [isRestaurantsPending, setIsRestaurantsPending] = useState(true);
  const [isReviewsPending, setIsReviewsPending] = useState(true);
  const [isStatsPending, setIsStatsPending] = useState(true);

  const onSearch = (find, location, instagramUsername) => {
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
  };

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
