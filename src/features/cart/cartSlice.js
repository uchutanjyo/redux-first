import { createSlice } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'


const initialState = {
    cartItems: cartItems,
    amount: 5,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        // we can mutate the state directly thanks to Immer Library
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => {
                return item.id !== itemId
            })
                console.log(state.cartItems)
        }
    }
}) 

console.log(cartSlice)

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer