import { configureStore, createSlice } from "@reduxjs/toolkit";
import tocartHandler from "./cart-slice";
const initialState={showCart:false}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        cartHandler(state){
            state.showCart=!state.showCart
        }
    }

})
const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        ui:tocartHandler.reducer
    }
})
export const { cartHandler} = cartSlice.actions;
export default store