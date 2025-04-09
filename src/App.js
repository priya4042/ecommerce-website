// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TopNavbar from './components/TopNavbar';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <Router>
      <TopNavbar />
      <div className="container">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/products" element={<ProductPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
