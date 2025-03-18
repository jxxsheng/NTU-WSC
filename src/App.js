import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MainCommittee from "./pages/MainCommittee";
import Portfolios from "./pages/Portfolios";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/main-committee" element={<MainCommittee />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
