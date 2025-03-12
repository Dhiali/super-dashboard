import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/fo 2.3.png'; // adjust path if needed

export default function Navbar() {
  return (
    <nav className="custom-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/compare" className="nav-btn">Compare</Link>
        <Link to="/timeline" className="nav-btn">Timeline</Link>
      </div>
    </nav>
  );
}
