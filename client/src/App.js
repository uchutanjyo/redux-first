import React, { useEffect } from "react";

import  Button from '@material-ui/core/Button';


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

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";

const App = () => {
  const dispatch = useDispatch()

  const { cartItems, isLoading, amount } = useSelector((store) => store.cart)

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])


  return (
    <>
      <Router>
      <Navbar />

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


