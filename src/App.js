import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TopNavbar from './components/TopNavbar';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import ProductPage from './components/ProductPage';
import ProductDetailPage from './components/ProductDetailPage';
import Footer from './components/Footer'; // ✅ make sure this is imported
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <TopNavbar />
      <div className="containers">
        <Routes>
          {/* Default route for home page */}
          <Route path="/" element={<ProductPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/about" element={<About />} /> {/* Add the About route */}
        </Routes>
      </div>
      <Footer /> {/* ✅ Footer is now outside Routes and will always be shown */}
    </Router>
  );
}

export default App;
