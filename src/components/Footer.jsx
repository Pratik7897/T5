import React from 'react';
import { Hexagon, Mail, MessageCircle, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <div className="brand" style={{ justifyContent: 'flex-start' }}>
            <span className="brand-name">NEXUS</span>
          </div>
          <p className="footer-desc">
            Next-generation electronics and accessories for the modern world.
            Experience quality without compromise.
          </p>
          <div className="social-links">
            <a href="#" className="icon-btn" aria-label="Mail"><Mail size={20} strokeWidth={1.5} /></a>
            <a href="#" className="icon-btn" aria-label="Message"><MessageCircle size={20} strokeWidth={1.5} /></a>
            <a href="#" className="icon-btn" aria-label="Globe"><Globe size={20} strokeWidth={1.5} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Shop</h4>
            <a href="#">Audio</a>
            <a href="#">Wearables</a>
            <a href="#">Accessories</a>
            <a href="#">Cameras</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="link-group">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">Warranty</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom border-top container">
        <p>&copy; {new Date().getFullYear()} Nexus Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
