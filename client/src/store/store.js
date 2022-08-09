import { configureStore } from '@reduxjs/toolkit'

import cartReducer from '../features/cart/cartSlice';
import modalReducer from '../features/modal/modalSlice';
import userReducer from '../features/firebase/userSlice'

const store = configureStore( {
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    user: userReducer
  }
}
);


export default store;