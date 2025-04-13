// src/components/ProductPage.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSlider from './HeroSlider';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-page">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Background Image Section */}
      <div className="background-banner" />

      {/* Product Grid */}
      <div className="product-grid">
        {products.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "40px" }}>Loading products...</p>
        ) : (
          products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.title} />
                <div className="badge">Sale</div>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <div className="price">
                  <span className="current">INR {(product.price * 83).toFixed(2)}</span>
                  <span className="original">INR {((product.price + 10) * 83).toFixed(2)}</span>
                </div>
                <Link to={`/product/${product.id}`} className="view-btn">Shop Now</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductPage;
