import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";


import MUITest from "./components/MuiTest";

import  Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CartContainer from "./components/CartContainer";
import DeleteModal from "./components/Modal";
import { openModal, closeModal } from "./features/modal/modalSlice";




const App = () => {

  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])


  if (isLoading) {
    return (
      <div><h1>isLoading...</h1></div>
    )
  }
  return (
    <>
<DeleteModal  />
    <Navbar>
</Navbar>

<MUITest></MUITest>
<CartContainer/>

    </>
  );
};

export default App;