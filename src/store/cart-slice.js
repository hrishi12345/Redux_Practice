import { createSlice } from "@reduxjs/toolkit";

const tocartHandler=createSlice({
    name:'cart-items',
    initialState:{items:[], totalQuantity: 0,changed:false },
    reducers:{
        addCartHandler(state,action){
            const newitem=action.payload
            const existing=state.items.find((item)=>item.id===newitem.id)
            state.totalQuantity++
            state.changed=true
            if(!existing){
                state.items.push({
                    id:newitem.id,
                    price:newitem.price,
                    quantity:1,
                    totalPrice:newitem.price,
                    title:newitem.title
                })
            }else{
                existing.quantity++;
                existing.totalPrice=existing.totalPrice+newitem.price
            }
        },
        removeitem(state,action){
          const id=action.payload
          const existing=state.items.find((item)=>item.id===id)
          state.totalQuantity--
          state.changed=false
          if( existing.quantity===1){
           state.items.filter((item)=>item.id!==id)
               
          }else{
            existing.quantity--
            existing.totalPrice=existing.totalPrice-existing.price          }
        }
    }
})
export const cartHandlerSlice =tocartHandler.actions
export default tocartHandler