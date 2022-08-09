import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from 'react-router-dom'

// pages

const Navbar = () => {
    const { amount } = useSelector(store => store.cart )
    const { cartItems, isLoading } = useSelector((store) => store.cart)

    return (
        <>
          <AppBar display='flex'>
            <Toolbar >
           
          <Link component={RouterLink} to="/"  > 
            <h5 >Home</h5>
          </Link>
          <Link component={RouterLink} to="/About" >
          <h5 >About</h5>
          </Link>
          <Link component={RouterLink} to="/Products" >
            Products
          </Link>
          <Link component={RouterLink} to="/Registration" >
            Register
          </Link>
          <Link component={RouterLink} to="/Login" >
            Login
          </Link>
    
    


                <MenuIcon margin="auto"></MenuIcon>
                <Box  marginLeft="auto">
      
         <Typography variant='h3'>The Store.</Typography></Box>
                <Box marginLeft="auto">Items in cart: {amount}</Box>

            </Toolbar>
          </AppBar>
        </>
    )
}
export default Navbar;