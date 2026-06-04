import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page container section-padding text-center fade-in">
        <div className="empty-cart-icon mb-6">
          <ShoppingBag size={64} />
        </div>
        <h2 className="mb-4">Your cart is empty</h2>
        <p className="text-secondary mb-6">Looks like you haven't added any items to your cart yet.</p>
        <Link to="/catalog" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container section-padding fade-in">
      <h1 className="section-title text-left mb-6">Shopping Cart</h1>

      <div className="cart-grid">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="cart-item glass-panel">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-details">
                <Link to={`/product/${item.id}`} className="cart-item-title">{item.name}</Link>
                <div className="cart-item-category">{item.category}</div>
                <div className="cart-item-price">${item.price.toFixed(2)}</div>
              </div>
              <button 
                className="remove-btn icon-btn"
                onClick={() => removeFromCart(index)}
                aria-label="Remove item"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary glass-panel">
          <h3 className="mb-4">Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Estimated Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary w-full mt-6" style={{ width: '100%' }}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
