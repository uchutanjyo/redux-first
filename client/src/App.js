import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems, getGraphData } from "./features/cart/cartSlice";

// react router
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import Products from "./Products";
import ProductDetailsPage from "./ProductDetailsPage";
import Registration from "./Registration";
import Login from "./components/Login"
import Navbar from "./components/Navbar";


const App = () => {

  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
    // dispatch(getGraphData())

  }, [])

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about/" element={<About />}></Route>
          <Route path="cart/" element={<Cart />}></Route>
          <Route path="products/" element={<Products />}></Route>
          <Route path="registration/" element={<Registration />}></Route>
          <Route path="login/" element={<Login />}></Route>

          <Route
            path="productdetailspage/"
            element={<ProductDetailsPage />}
          ></Route>
          <Route
            path=":productId/productdetailspage"
            element={<ProductDetailsPage />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;


