import React, { useEffect } from "react";

import { signInWithGoogle } from "./config/utils";

import  Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { setActiveUser } from "./features/firebase/userSlice";
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
import { auth } from "./config/utils";

const App = () => {

  const { cartItems, isLoading } = useSelector((store) => store.cart)

  const dispatch = useDispatch()

const handleSignIn = () => {
  signInWithGoogle()
  .then((result) => {
    const user = auth.currentUser
     dispatch(setActiveUser(user.displayName))
     return
  }) }


  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  return (
    <>
      <Router>
      <Navbar/>
      <Button style={{height: '50vh', width: '50vw', marginTop: '10em', backgroundColor: 'red', justifyContent: 'center'}}
       onClick={handleSignIn}></Button>
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


