import React, { useState } from 'react';
import './AddProducts.css'; // Custom styles for AddProducts

function AddProducts() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    price: '',
    color: '',
    description: '',
    image: null
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setCurrentProduct({
      name: '',
      price: '',
      color: '',
      description: '',
      image: null
    });
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setCurrentProduct({ ...currentProduct, image: URL.createObjectURL(files[0]) });
    } else {
      setCurrentProduct({ ...currentProduct, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, currentProduct]);
    handleClose();
  };

  const handleDelete = (index) => {
    const newList = [...products];
    newList.splice(index, 1);
    setProducts(newList);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="add-products container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="page-title">Manage Products</h2>
      </div>

      <div className="search-add-container">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="form-control search-bar"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Add Product Button */}
        <button className="btn btn-primary" onClick={handleShow}>+ Add Product</button>
      </div>

      <table className="table table-bordered table-striped product-table">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Description</th>
            <th style={{ width: '150px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((prod, idx) => (
            <tr key={idx} className="table-row">
              <td><img src={prod.image} alt="product" width="60" className="product-image" /></td>
              <td>{prod.name}</td>
              <td>{prod.color}</td>
              <td>₹ {prod.price}</td>
              <td>{prod.description}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(idx)}>Delete</button>
              </td>
            </tr>
          ))}
          {filteredProducts.length === 0 && (
            <tr><td colSpan="6" className="text-center text-muted">No products found</td></tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal show" style={{ display: 'block' }} onClick={handleClose}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Product</h5>
                <button type="button" className="btn-close" onClick={handleClose}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-2">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label>Price (₹)</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label>Color</label>
                    <input
                      type="text"
                      name="color"
                      className="form-control"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label>Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="2"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="mb-2">
                    <label>Upload Image</label>
                    <input
                      type="file"
                      name="image"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                  <button type="submit" className="btn btn-primary">Save Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProducts;
