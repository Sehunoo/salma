
import Logo from './Logo';
import "./Header.css";
function Header() {
  return (
    <header className="header">
     <Logo />
      <nav className="nav-links">
        <a  to="/">Home</a>
        <a to="/about">About</a>
        <a to="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;