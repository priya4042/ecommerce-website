import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

const getColorFromId = (id) => {
  const colors = ['#f97316', '#10b981', '#3b82f6', '#9333ea', '#ef4444', '#eab308'];
  return colors[id % colors.length];
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [bgColor, setBgColor] = useState('#f97316');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setBgColor(getColorFromId(data.id));
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setRelatedProducts(data.slice(0, 4));
      } catch (error) {
        console.error('Failed to fetch related products:', error);
      }
    };
    fetchRelatedProducts();
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail-page" style={{ backgroundColor: bgColor }}>
      <div className="product-detail-container">
        {/* LEFT IMAGE SECTION */}
        <div className="product-images-layout">
          <div className="large-image-card">
            <img src={product.image} alt="Main view" />
          </div>
          <div className="small-image-row">
            {[...Array(4)].map((_, i) => (
              <div className="image-card" key={i}>
                <img src={product.image} alt={`View ${i + 2}`} />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT INFO SECTION */}
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <div className="price-box">
            <span className="price-original">Rs. {(product.price * 100).toFixed(2)}</span>
            <span className="price-current">Rs. {(product.price * 83).toFixed(2)}</span>
          </div>

          <div className="ratings">★★★★☆ 4.5 (245 reviews)</div>

          <div className="size-selector">
            <strong>Size:</strong>
            <div className="size-options">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button key={size}>{size}</button>
              ))}
            </div>
          </div>

          <div className="quantity-control">
            <strong>Quantity:</strong>
            <div>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <div className="button-group">
            <button className="add-to-cart">Add to cart</button>
            <button className="buy-now">Buy it now</button>
          </div>

          <p className="description">{product.description}</p>
        </div>
      </div>

      <div className="you-may-also-like">
        <h2>You May Also Like</h2>
        <div className="related-products">
          {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-product">
              <img src={relatedProduct.image} alt={relatedProduct.title} />
              <p className="related-title">{relatedProduct.title}</p>
              <span className="related-price">Rs. {(relatedProduct.price * 83).toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
