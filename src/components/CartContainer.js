import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete'
import Box from "@material-ui/core/Box"
import { clearCart } from '../features/cart/cartSlice'

const CartContainer = () => {
    

    const { cartItems, amount, total} = useSelector(store => store.cart)

    const dispatch = useDispatch()

    if (amount < 1) {
        return (
            <Box>You've got NOTHING in your cart.</Box>
        )
    }
    return (
      <>
       <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" maxWidth="sm"  border={1}
      borderColor="red">
    <div>{amount} items in cart</div>
    <div>{cartItems.map((item) => {
      return  <CartItem key={item.id} {...item}/>  
    })}</div>
    <div><DeleteIcon onClick={() => {dispatch(clearCart())}}></DeleteIcon>Delete cart</div>
    </Box>
      </>
    );
  };
  
  export default CartContainer;