import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from '../../config/utils'



const initialState = {
    userName: null,
    usersLoading: false
}



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload
            
            console.log(current(state))
        }
    }

        
}) 


export const { setActiveUser } = userSlice.actions;

export const userInitialState = initialState

export default userSlice.reducer