import './App.css';
import './fonts.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import SearchResults from "./components/SearchResults";
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register";
import {MoviesProvider} from "./components/MoviesContext";
import AddMovie from "./components/AddMovie";
import {isExpired} from "react-jwt";
import DeleteMovie from "./components/DeleteMovie";

function App() {
  return (
      <MoviesProvider>
          <Router>
              <div className="App">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Main />} />
                      <Route path="/signin" element={<Login />} />
                      <Route path="/signup" element={<Register />} />
                      <Route path="/add" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <AddMovie />} />
                      <Route path="/delete" element={isExpired(localStorage.getItem('token')) ? <Navigate replace to="/"/> : <DeleteMovie />} />
                      <Route path="/search/:query" element={<SearchResults />} />
                      <Route path="/details/:title/:id" element={<MovieDetails />} />
                  </Routes>
                  <Footer />
              </div>
          </Router>
      </MoviesProvider>
  );
}

export default App;
