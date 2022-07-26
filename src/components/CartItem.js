
        import { useSelector } from "react-redux";
        import DeleteIcon from '@material-ui/icons/Delete'
        import { removeItem, increase, decrease } from "../features/cart/cartSlice";
        import Button from '@material-ui/core/Button'
        import ButtonGroup from "@material-ui/core/ButtonGroup";
        import { useDispatch } from "react-redux";
        import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
        import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from "@material-ui/core";
        
        
        const CartItem = ( {title, id, price, amount}) => {
         
          const dispatch = useDispatch()
        
            return (
              <>
 <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" maxWidth="sm"  border={1}
      borderColor="red">        
            <div>{title}</div>
            <div><Button onClick={()=>dispatch(removeItem(id))} startIcon={<DeleteIcon />} /></div>
            <ButtonGroup>

            <Button onClick={()=>dispatch(increase(id))} startIcon={<KeyboardArrowUpIcon/>}/>
            <Button onClick={
              ()=> {
                if (amount === 1) {
                  dispatch(removeItem(id))
                  return; 
                 } else { dispatch(decrease(id))}}} startIcon={<KeyboardArrowDownIcon/>}/>
            </ButtonGroup>
            <div>{amount}</div>

        </Box>
              </>
            );
          };
          
          export default CartItem;