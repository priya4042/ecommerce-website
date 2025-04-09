import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './ProductPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categories = ['mens-shirts', 'tops'];
        const productResponses = await Promise.all(
          categories.map(category =>
            fetch(`https://dummyjson.com/products/category/${category}`).then(res => res.json())
          )
        );

        const mergedProducts = productResponses.flatMap(res => res.products);
        setProducts(mergedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  return (
    <div className="product-page">

      {/* Slider Section */}
      <div className="hero-slider">
        <Slider {...sliderSettings}>
          <div className="slide-item">
            <img
              src="https://images.unsplash.com/photo-1602810310393-30e4a4c9c7bd"
              alt="Black Shirt"
            />
          </div>
          <div className="slide-item">
            <img
              src="https://images.unsplash.com/photo-1621983252644-076d0e5bd872"
              alt="Black T-Shirt"
            />
          </div>
          <div className="slide-item">
            <video autoPlay muted loop className="slide-video">
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Slider>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="image-wrapper">
              <img src={product.thumbnail} alt={product.title} />
              <div className="badge">Sale</div>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <div className="price">
                <span className="original">Rs. {(product.price + 500).toLocaleString()}</span>
                <span className="current">Rs. {product.price.toLocaleString()}</span>
              </div>
              <Link to={`/product/${product.id}`} className="view-btn">Shop Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
