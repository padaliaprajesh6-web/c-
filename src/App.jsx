import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PanoramaSlider from "./components/PanoramaSlider/PanoramaSlider";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: 80 }}>
      <h1>Panorama Slider Demo</h1>
      <Link to="/panorama" style={{ fontSize: 20 }}>
        Open Slider
      </Link>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/panorama" element={<PanoramaSlider />} />
      </Routes>
    </Router>
  );
}

export default App;
