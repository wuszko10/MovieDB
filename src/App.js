import './App.css';
import './fonts.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import SearchResults from "./components/SearchResults";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/search/:query" element={<SearchResults />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
