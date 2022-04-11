import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Home from "./Components/Home";
import Details from "./Components/Details";
import VideogameCreate from "./Components/VideogameCreate";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/videogame" element={<VideogameCreate />} />
          <Route path="/videogame/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
