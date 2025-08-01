import React, { useState } from "react";
import Navbar from "./Navbar";
import ImageSection from "./ImageSection";
import Footer from "./Footer";
import "./navebare.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="page-container">
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main className="content">
        <h1>Welcome to My Website</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmQnMFitZkz8u60xLZkgmbFQXwPiitayOYA&s"
          alt="Welcome"
        />
        <p>This is a sample page.</p>
        <p>Feel free to explore the links above.</p>
        <p>Enjoy your stay!</p>
      </main>

      <div className="container">
        <ImageSection
          title="Featured Section"
          description="This section can contain what WWW stands for."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4f5rTN2UemgKx-rrOO5HC-2IVRXNbKiIlQ&s"
          alt="WWW Explained"
        />
        <ImageSection
          title="Another Section"
          description="This section can contain where the web spreads to."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2LLGYurVKWud85kZozXTU0ybJ9i1qsopbNA&s"
          alt="Web Reach"
        />
        <ImageSection
          title="Final Section"
          description="This section can contain additional information or links."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxI6_lAH0aJwFATa3p9bY4OAFXgxMzPwUIQ&s"
          alt="Final Info"
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
