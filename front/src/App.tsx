import React, { useState, useEffect } from "react";
import Header1 from "./components/layout/Header1";
import NavRoutes from "./components/layout/NavRoutes";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Footer1 from "./components/layout/Footer1.js";
import Logout from "./pages/Logout.js";
import Products from "./pages/product/Products.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import { ToastContainer } from "react-toastify";
import ProductEdit from "./pages/product/ProductEdit.js";
import ProductAdd from "./pages/product/ProductAdd.js";
import ProductDetails from "./pages/product/ProductDetails.js";
import Favorites from "./pages/product/Favorites.js";
function App() {
  return (
    <div className="w-100">
      <Header1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/products/:chosenCategory/:categoryName"
          element={<Products />}
        />
        <Route path="/product-edit/:productId" element={<ProductEdit />} />
        <Route path="/product-add/" element={<ProductAdd />} />
        <Route path="/product-details/:productId" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      <Footer1 />
    </div>
  );
}

export default App;
