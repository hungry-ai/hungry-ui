import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="App" style={{ padding: 24 }}>
      <div style={{ marginBottom: 24 }}>
        <SearchBar />
      </div>
      <div style={{ marginBottom: 24 }}>
        <SearchResults />
      </div>
      <div>
        <Reviews />
      </div>
      <div>
        <Stats />
      </div>
    </div>
  );
}

export default App;
