
        import { useSelector } from "react-redux";
        import DeleteIcon from '@material-ui/icons/Delete'
        import { removeItem, increase, decrease } from "../features/cart/cartSlice";
        import Button from '@material-ui/core/Button'
        import { useDispatch } from "react-redux";
        import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
        import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
        
        
        const CartItem = ( {title, id, price, amount}) => {
         
          const dispatch = useDispatch()
        
            return (
              <>
        <div>CartItem
        
            <div>{title}</div>
            <div><Button onClick={()=>dispatch(removeItem(id))} startIcon={<DeleteIcon />} /></div>
            <Button onClick={()=>dispatch(increase(id))} startIcon={<KeyboardArrowUpIcon/>}/>
        </div>
              </>
            );
          };
          
          export default CartItem;