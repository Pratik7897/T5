import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card fade-in">
      <Link to={`/product/${product.id}`} className="product-image-container">
        {product.badge && (
          <span className={`badge product-badge badge-${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-overlay">
          <button 
            className="btn btn-primary overlay-btn"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
          >
            <ShoppingCart size={16} strokeWidth={1.5} /> Quick Add
          </button>
        </div>
      </Link>
      
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.name}</h3>
        </Link>
        
        <div className="product-price-row">
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
