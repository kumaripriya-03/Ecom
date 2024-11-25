import { createSlice } from "@reduxjs/toolkit";
import { categorisedCartItem } from "../../types/model";

const initialState: categorisedCartItem[] = [];

const cartSlice2 = createSlice({
  name: "cart2",
  initialState,
  reducers: {
    setCart2: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    updateCart2: (state, action) => {
        const cartIndex = state.findIndex((cartItem: categorisedCartItem) => cartItem.cartItem?.id === action.payload.id)
        
        if(cartIndex < 0) {
            const cartDetails = {
                cartItem: action.payload,
                quantity: 1,
                totalPrice: 0
            }
            state = [...state, cartDetails];
        }
        else {
            state[cartIndex].quantity++;
        } 
        return state;

    },
    incrementQuantity: (state, action) => {
        state[action.payload].quantity++;
        return state;
    },
    decrementQuantity: (state, action) => {
        state[action.payload].quantity--;
        return state;
    },
  },
});

export const {setCart2, updateCart2, incrementQuantity, decrementQuantity} = cartSlice2.actions;
export default cartSlice2.reducer;