import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TopNavbar from './components/TopNavbar';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import ProductPage from './components/ProductPage';
import ProductDetailPage from './components/ProductDetailPage';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import AddProducts from './components/AddProducts'; // ✅ ADD THIS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/ecommerce-website">
      <TopNavbar />
      <div className="containers">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/add-products" element={<AddProducts />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
