import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from '../../config/utils'



const initialState = {
    currentUser: null,
    usersLoading: false
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.currentUser = action.payload
            console.log(current(state))
        },

        setIsUserLoading: (state, action) => {
            state.usersLoading = !state.usersLoading
        }
    }

        
}) 


export const { setActiveUser, setIsUserLoading } = userSlice.actions;

export const userInitialState = initialState.currentUser

export default userSlice.reducer