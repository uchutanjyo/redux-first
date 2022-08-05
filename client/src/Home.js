
  import React, { useEffect } from "react";
  import ReactDOM from "react-dom";

  import  Button from '@material-ui/core/Button';
  import SaveIcon from '@material-ui/icons/Save'
  import ButtonGroup from '@material-ui/core/ButtonGroup'
  import Checkbox from '@material-ui/core/Checkbox'
  import FormControlLabel from '@material-ui/core/FormControlLabel'
  import CartContainer from "./components/CartContainer";
  import DeleteModal from "./components/Modal";
  import { openModal, closeModal } from "./features/modal/modalSlice";
  
  import { calculateTotals, getCartItems, getGraphData } from "./features/cart/cartSlice";
  import { useDispatch, useSelector } from "react-redux";

  const Home = () => {

    const { cartItems, isLoading } = useSelector((store) => store.cart)

  if (isLoading) {
    return (
      <div><h1>isLoading...</h1></div>
    )
  }
  return (
<>
<>


<CartContainer/>

    </>
  );


</>
  )
  }

export default Home;