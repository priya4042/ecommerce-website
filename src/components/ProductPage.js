import React from 'react';
import Slider from "react-slick"; // Import react-slick for carousel
import { Link } from 'react-router-dom';
import './ProductPage.css'; // Custom CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductPage = () => {
  // Sample data for products with actual image URLs
  const products = [
    { id: 1, name: 'Product 1', image: 'https://images.unsplash.com/photo-1604550588555-c6e4f48f3c91?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8cGFyYWxsdGV8ZW58MHx8fHwxNjYwODQwMTI5&ixlib=rb-1.2.1&q=80&w=400', price: '$10.00' },
    { id: 2, name: 'Product 2', image: 'https://images.unsplash.com/photo-1600766960439-45c7c15cae5b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8dGVhfHxlbnwwfHx8fDE2NjA4NDA4NzA&ixlib=rb-1.2.1&q=80&w=400', price: '$15.00' },
    { id: 3, name: 'Product 3', image: 'https://images.unsplash.com/photo-1606112219974-3b684a7c1e7f?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8Zm9vZHN8ZW58MHx8fHwxNjYwODQwMDgw&ixlib=rb-1.2.1&q=80&w=400', price: '$20.00' },
    { id: 4, name: 'Product 4', image: 'https://images.unsplash.com/photo-1604508599429-d76b6c96b9f1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8dGVhZHN8ZW58MHx8fHwxNjYwODQwMDQw&ixlib=rb-1.2.1&q=80&w=400', price: '$30.00' },
    { id: 5, name: 'Product 5', image: 'https://images.unsplash.com/photo-1618281970540-c08bc9e6d0fe?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MXx8b3JhbmdlcyxlZGl0ZWFsc3xlbnwwfHx8fDE2NjA4NDAyMTM&ixlib=rb-1.2.1&q=80&w=400', price: '$25.00' },
  ];

  // Slick Carousel Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="product-page">
      {/* Header Card - Trending Products */}
      <div className="header-card">
        <h2 className="section-title">Trending Products</h2>
        <Slider {...settings}>
          <div className="slider-item">
            <img src="https://images.unsplash.com/photo-1596495577885-8c3f99c1e883?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MHx8cHJvZHVjdHN8ZW58MHx8fHwxNjYwODQxODg4&ixlib=rb-1.2.1&q=80&w=600" alt="Trending 1" />
          </div>
          <div className="slider-item">
            <img src="https://images.unsplash.com/photo-1606762956600-2f59f8885d57?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8dHJlbmRpbmd8ZW58MHx8fHwxNjYwODQwMTI0&ixlib=rb-1.2.1&q=80&w=600" alt="Trending 2" />
          </div>
          <div className="slider-item">
            <img src="https://images.unsplash.com/photo-1610282948191-99d344f9241b?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8Y2FtZXJhY3Roc3xlbnwwfHx8fDE2NjA4NDA0MTM&ixlib=rb-1.2.1&q=80&w=600" alt="Trending 3" />
          </div>
          <div className="slider-item">
            <img src="https://images.unsplash.com/photo-1617306770374-29f46b1c97ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MHx8cGFyYWxsdGV8ZW58MHx8fHwxNjYwODQwMTI5&ixlib=rb-1.2.1&q=80&w=600" alt="Trending 4" />
          </div>
        </Slider>
      </div>

      {/* Products - This Month's Sale */}
      <div className="sale-section">
        <h2 className="section-title">This Month's Sale</h2>
        <div className="product-cards">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <Link to={`/product/${product.id}`} className="btn btn-primary">View Product</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
