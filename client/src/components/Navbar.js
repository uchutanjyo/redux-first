import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Typography from "@material-ui/core/Typography";
import { Box } from "@mui/material";

const Navbar = () => {
    const { amount } = useSelector(store => store.cart )

    console.log(amount)
    return (
        <>
          <AppBar display='flex'>
            <Toolbar >
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