import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Modelos from "./pages/Modelos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelos" element={<Modelos />} />
      </Routes>
    </Router>
  );
}

export default App;
