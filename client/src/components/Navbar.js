import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import  Button from '@material-ui/core/Button';
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals, getCartItems } from "../features/cart/cartSlice";
import { setActiveUser } from "../features/firebase/userSlice";
import { auth, signInWithGoogle } from "../config/utils";
import { signOut } from "firebase/auth";
import { userInitialState } from "../features/firebase/userSlice";



// pages

const Navbar = (props) => {


    const { cartItems, isLoading, amount } = useSelector((store) => store.cart)
     const { userName, initialState } = useSelector((store) => store.user)

  const dispatch = useDispatch()

const handleLogin = () => {
  signInWithGoogle()
  .then((result) => {
    const user = auth.currentUser
    if (!user) dispatch(setActiveUser(...initialState))
     dispatch(setActiveUser(user.displayName))
     return
  }) }

  const handleLogout = () => {
  signOut(auth)
  dispatch(setActiveUser(userInitialState.userName))

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

         {!userName &&  <Button onClick={handleLogin}>Login here</Button>}
         {userName &&  <Button onClick={handleLogout}>Logout.</Button> }
                <Box marginLeft="auto">Items in cart: {amount}</Box>

            </Toolbar>
          </AppBar>
        </>
    )
}
export default Navbar;