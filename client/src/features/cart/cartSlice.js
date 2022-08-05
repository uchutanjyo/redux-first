import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'
import axios from 'axios';

const url = "https://course-api.com/react-useReducer-cart-project"

const GRAPHQL_URL = 'http://localhost:9000/';

const initialState = {
    cartItems: [],
    amount: 2,
    total: 0,
    isLoading: true
}

 export const getCartItems = createAsyncThunk('cart/getCartItems', (action) => {
    return fetch(url)
    .then((res) => {
       return res.json();
    })
    .catch((err) => {
        console.log(err)
    })
})


export const getGraphData = createAsyncThunk('cart/getGraphData', async (action) => {
        try {
            const response = await axios.post(GRAPHQL_URL, 
                 { query: `
                 Query {
            getCartItem {
              id
              title
              img
              amount
            }
        }
          `}, 
          )
          console.log(response)
        return response }
         catch (error) {
            console.log("it is failure",error)
           
        }
    })


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
        },
        increase: (state, {payload} ) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem.amount = cartItem.amount + 1;

        },
        decrease: (state, {payload} ) => {
            const cartItem = state.cartItems.find((item) => item.id === payload)
            cartItem.amount = cartItem.amount - 1 
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;

            })
            state.amount = amount;
            state.total = total;
        },
    },
        extraReducers: {
            [getCartItems.pending]: (state) => {
                state.isLoading = true;
            },
            [getCartItems.fulfilled]: (state, action) => {
                // action contains result if succesful.
                console.log(action, 'act')
                state.isLoading = false;
                state.cartItems = action.payload
            },
            [getCartItems.rejected]: (state) => {
                state.isLoading = false;
        }
        
        }
}) 

console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer