import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';
import { products } from '../data';
import './ProductDetails.css';

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product not found</h2>
        <Link to="/catalog" className="btn btn-primary mt-4">Back to Catalog</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-details-page container section-padding fade-in">
      <button onClick={() => navigate(-1)} className="back-btn icon-btn mb-6" style={{ width: 'auto', gap: '0.5rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={16} /> Back
      </button>

      <div className="product-details-grid">
        <div className="product-gallery">
          <div className="main-image-container">
            {product.badge && (
              <span className={`badge product-badge badge-${product.badge.toLowerCase()}`}>
                {product.badge}
              </span>
            )}
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
        </div>

        <div className="product-info-detailed">
          <span className="product-category uppercase">{product.category}</span>
          <h1 className="product-title-large">{product.name}</h1>
          
          <div className="product-rating-detailed mb-4">
            <span className="rating-score">{product.rating} / 5</span>
            <span className="review-count">({product.reviews} reviews)</span>
          </div>

          <div className="product-price-large mb-6">${product.price.toFixed(2)}</div>
          
          <p className="product-description mb-6">{product.description}</p>

          <div className="add-to-cart-section mb-6">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="btn btn-primary flex-1" onClick={handleAddToCart}>
              <ShoppingCart size={18} strokeWidth={1.5} /> Add to Cart
            </button>
          </div>

          <div className="product-features">
            <div className="feature-item">
              <Truck className="feature-icon" strokeWidth={1.5} />
              <div>
                <h4>Free Fast Delivery</h4>
                <p>Enter postal code for delivery availability</p>
              </div>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" strokeWidth={1.5} />
              <div>
                <h4>Return Delivery</h4>
                <p>Free 30 Days Delivery Returns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
