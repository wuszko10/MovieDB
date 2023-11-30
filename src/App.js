import './App.css';
import './fonts.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register";
import {MoviesProvider} from "./components/MoviesContext";

function App() {
  return (
      <MoviesProvider>
          <Router>
              <div className="App">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Main />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/search/:query" element={<SearchResults />} />
                      <Route path="/films/:title/:id" element={<MovieDetails />} />
                  </Routes>
                  <Footer />
              </div>
          </Router>
      </MoviesProvider>
  );
}

export default App;
