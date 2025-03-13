import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../assets/fo 2.3.png'; 

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="custom-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <div className="nav-links">
        <Link 
          to="/" 
          className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/compare" 
          className={`nav-btn ${location.pathname === '/compare' ? 'active' : ''}`}
        >
          Compare
        </Link>
        <Link 
          to="/timeline" 
          className={`nav-btn ${location.pathname === '/timeline' ? 'active' : ''}`}
        >
          Timeline
        </Link>
      </div>
    </nav>
  );
}
