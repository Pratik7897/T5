import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ cartCount, theme, toggleTheme }) => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container flex-between nav-content">
        <Link to="/" className="brand">
          <span className="brand-name">NEXUS</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/catalog" className={`nav-link ${location.pathname === '/catalog' ? 'active' : ''}`}>Catalog</Link>
        </div>

        <div className="nav-actions flex-center">
          <button className="icon-btn" aria-label="Toggle Theme" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
          </button>
          <button className="icon-btn" aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link to="/cart" className="cart-btn icon-btn" aria-label="Cart">
            <ShoppingCart size={20} strokeWidth={1.5} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
