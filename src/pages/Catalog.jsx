import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import { Filter } from 'lucide-react';
import './Catalog.css';

const Catalog = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="catalog-page container section-padding fade-in">
      <div className="catalog-header">
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>All Products</h1>
        
        <div className="filter-container">
          <div className="filter-icon"><Filter size={20} /></div>
          <div className="filter-pills">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-pill ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid-auto-fit">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Try changing your category filter.</p>
        </div>
      )}
    </div>
  );
};

export default Catalog;
