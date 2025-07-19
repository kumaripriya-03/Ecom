import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { categorisedCartItem, IProduct } from "../../types/model";

const initialState: categorisedCartItem[] = [];

const cartSlice2 = createSlice({
  name: "cart2",
  initialState,
  reducers: {
    setCart2: (state, action: PayloadAction<IProduct>) => {
      const newItem: categorisedCartItem = {
        cartItem: action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      };
      state.push(newItem);
    },

    updateCart2: (state, action: PayloadAction<IProduct>) => {
      const cartIndex = state.findIndex(
        (cartItem) => cartItem.cartItem?.id === action.payload.id
      );

      if (cartIndex < 0) {
        const cartDetails: categorisedCartItem = {
          cartItem: action.payload,
          quantity: 1,
          totalPrice: action.payload.price,
        };
        state.push(cartDetails);
      } else {
        const existingItem = state[cartIndex];
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.quantity * (existingItem.cartItem?.price || 0);
      }
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state[action.payload];
      if (!item) return;
      item.quantity += 1;
      item.totalPrice = item.quantity * (item.cartItem?.price || 0);
    },

    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state[action.payload];
      if (!item || item.quantity <= 1) return;
      item.quantity -= 1;
      item.totalPrice = item.quantity * (item.cartItem?.price || 0);
    },
  },
});

export const {
  setCart2,
  updateCart2,
  incrementQuantity,
  decrementQuantity,
} = cartSlice2.actions;
export default cartSlice2.reducer;




