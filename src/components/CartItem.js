import { useSelector } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete'
import { removeItem } from "../features/cart/cartSlice";
import Button from '@material-ui/core/Button'
import { useDispatch } from "react-redux";


const CartItem = ( {title, id, price, amount}) => {
 
  const dispatch = useDispatch()

    return (
      <>
<div>CartItem

    <div>{title}</div>
    <div><Button onClick={()=>dispatch(removeItem(id))} /><DeleteIcon />delete from cart</div>
</div>
      </>
    );
  };
  
  export default CartItem;