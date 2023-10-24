import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Header from "./components/Header";
import Home from './pages/Home'
import Products from "./pages/Product";
import Results from "./pages/Results";
import Login from "./pages/login";
import Checkout from "./pages/Checkout";
import WishList from "./pages/WishList";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    
    <div className="app">
      <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/product" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
    
    
  );
}

