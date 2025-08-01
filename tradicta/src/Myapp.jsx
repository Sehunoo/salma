import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Logo</div>
      <input type="email" placeholder="Enter your email" className="email-input" />
    </footer>
  );
}

function Home() {
  return (
    <section className="card-container">
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </section>
  );
}

function About() {
  return <div className="page"><h2>About Page</h2><p>This is the about section.</p></div>;
}

function Contact() {
  return <div className="page"><h2>Contact Page</h2><p>This is the contact section.</p></div>;
}

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
