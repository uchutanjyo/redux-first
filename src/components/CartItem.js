import { useSelector } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete'


const CartItem = ( {title, id, price, amount}) => {

    return (
      <>
<div>CartItem

    <div>{title}</div>
    <div><DeleteIcon />delete from cart</div>
</div>
      </>
    );
  };
  
  export default CartItem;