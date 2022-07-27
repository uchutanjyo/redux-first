import  Modal  from "@material-ui/core/Modal";
import React from "react";
import { Typography } from "@mui/material";
import Box from '@material-ui/core/Box'
import Button from "@mui/material/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal, closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const DeleteModal = () => {

    const { isOpen } = useSelector(store => store.modal)

    const dispatch = useDispatch()

    return (

<Modal
  open={isOpen}
>
  <Box position='absolute' left='25%' top='25%' width='50vw' height='50vh' >
    <Typography id="modal-modal-title" variant="h6" component="h2">
    Remove all items from cart?    
        </Typography>
    <Button startIcon={<SaveIcon/>} onClick={() => {
        dispatch(clearCart())
        dispatch(closeModal())}}  size="large" color="primary" variant="contained">
    Yes</Button>
    <Button startIcon={<SaveIcon/>} onClick={() => dispatch(closeModal())}  size="large" color="secondary" variant="contained">
    No
    </Button>
    </Box>
    </Modal>
        )
}

export default DeleteModal;