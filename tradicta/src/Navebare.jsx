import React, { useState } from "react";
import "./navebare.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="logo"></div>

        <div className="name">MyWebsite</div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <button className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          &#9776;
        </button>
      </nav>
          
   
      <main className="content">
        <h1>Welcome to My Website</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmQnMFitZkz8u60xLZkgmbFQXwPiitayOYA&s" alt="" />
        <p>This is a sample page.</p>
        <p>Feel free to explore the  links above.</p>
        <p>Enjoy your stay!</p>
      </main>\
      <div className="container">
      <div className="image-container">
        <h2>Featured Section</h2>
        <p>This section can contain what www stands for .</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4f5rTN2UemgKx-rrOO5HC-2IVRXNbKiIlQ&s" alt="WWW Explained" />
      </div>
      <div className="image-container">
        <h2>Another Section</h2>
        <p>This section can contain where the web spreads to.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LLGYurVKWud85kZozXTU0ybJ9i1qsopbNA&s" alt="Web Reach" />
      </div>
      <div className="image-container">
        <h2>Final Section</h2>
        <p>This section can contain additional information or links.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxI6_lAH0aJwFATa3p9bY4OAFXgxMzPwUIQ&s" alt="Final Info" />
      </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 My Application</p>
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
