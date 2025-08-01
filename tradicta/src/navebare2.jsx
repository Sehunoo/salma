import React from "react";

function Navbar({ menuOpen, toggleMenu }) {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="name">MyWebsite</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <button
        className="menu-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}

export default Navbar;
