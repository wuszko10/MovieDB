import './App.css';
import './fonts.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./components/login";
import SearchResults from "./components/searchResults";

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
