import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="/WSC_Logo.png" alt="WSC Club Logo" />
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/portfolios" onClick={() => setIsOpen(false)}>Portfolios</Link>
        <Link to="/main-committee" onClick={() => setIsOpen(false)}>Main Committee</Link>
        <Link to="/articles" onClick={() => setIsOpen(false)}>Articles</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
