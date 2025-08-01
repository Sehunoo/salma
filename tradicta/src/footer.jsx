import "./Footer.css";
import Logo from './Logo';


function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <input type="Email"  placeholder="Enter your Email" />
      <button>Send</button>
      <p>&copy; 2025 My Application</p>
      
    </footer>
  );
}

export default Footer;
