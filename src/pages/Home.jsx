import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import './Home.css';

const Home = ({ onAddToCart }) => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              Tech That <br />
              <span className="text-gradient">Defines You.</span>
            </h1>
            <p className="hero-subtitle">
              Discover the latest in premium electronics, wearables, and smart home accessories. Built for performance.
            </p>
            <div className="hero-actions">
              <Link to="/catalog" className="btn btn-primary">
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link to="/catalog" className="btn btn-secondary">
                View Deals
              </Link>
            </div>
          </div>
          <div className="hero-image fade-in" style={{ animationDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&q=80&w=1000" alt="Premium electronics" />
            <div className="hero-glow"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-secondary">
        <div className="container grid-auto-fit">
          <div className="feature-card glass-panel">
            <div className="feature-icon"><Zap /></div>
            <h3>Lightning Fast</h3>
            <p>Same-day shipping on all orders placed before 2 PM.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon"><ShieldCheck /></div>
            <h3>Secure Checkout</h3>
            <p>100% secure payment processing with buyer protection.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon"><Headphones /></div>
            <h3>24/7 Support</h3>
            <p>Our expert technical support team is always here to help.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container section-padding">
        <div className="flex-between section-header">
          <h2 className="section-title" style={{ margin: 0 }}>Featured Products</h2>
          <Link to="/catalog" className="btn btn-secondary">View All</Link>
        </div>
        <div className="grid-auto-fit">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
