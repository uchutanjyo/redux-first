import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import  Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom'

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../features/cart/cartSlice";
import { setActiveUser, userInitialState, setIsUserLoading } from "../features/firebase/userSlice";
import { auth, signInWithGoogle, handleUserProfile } from "../config/utils";
import { signOut } from "firebase/auth";
import { useRef } from "react";



// pages

const Navbar = (props) => {


    const { cartItems, isLoading, amount } = useSelector((store) => store.cart)
     const { currentUser, initialState, usersLoading } = useSelector((store) => store.user)

  const dispatch = useDispatch()
  const user = auth.currentUser

  const updateUserInDatabase = async () => {
      const user = auth.currentUser
      const userRef = await handleUserProfile(user)
      console.log(userRef, 'start')
      // dispatch(setActiveUser({ }))

  }

  useEffect( () => {
    if (currentUser !== null) {
      
    updateUserInDatabase()
      setIsUserLoading()
    }
  }, [currentUser])

const handleLogin = () => {
  signInWithGoogle()
  .then((result) => {
    const user = auth.currentUser
    console.log(usersLoading)
    if (!user) dispatch(setActiveUser(userInitialState))
     dispatch(setActiveUser(user))
     return
  }) }

  const handleLogout = () => {
  signOut(auth)
  dispatch(setActiveUser(userInitialState))

   console.log('signedout')
 }

    return (
        <>
          <AppBar style={{ background: '#22f222'}}display='flex'>
            <Toolbar >
           
          <Link style={{marginRight: '2em'}}  component={RouterLink} to="/"  > 
            <h5 >Home</h5>
          </Link>
          <Link style={{marginRight: '2em'}}  component={RouterLink} to="/About" >
          <h5 >About</h5>
          </Link>
          <Link style={{marginRight: '2em'}}  component={RouterLink} to="/Products" >
            Products
          </Link>
          <Link style={{marginRight: '2em'}}  component={RouterLink} to="/Registration" >
            Register
          </Link>
          <Link style={{marginRight: '2em'}}  component={RouterLink} to="/Login" >
            Login
          </Link>
    
    


                <MenuIcon margin="auto"></MenuIcon>
                <Box  marginLeft="auto">
      
         <Typography variant='h3'>The Store.</Typography></Box>

         {!currentUser &&  <Button onClick={handleLogin}>Login here</Button>}
         {currentUser &&  <Button onClick={handleLogout}>Logout.</Button> }
                <Box marginLeft="auto">Items in cart: {amount}</Box>

            </Toolbar>
          </AppBar>
        </>
    )
}
export default Navbar;