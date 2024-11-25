import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/model";

const initialState: IProduct[] = [];

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setProduct: (state, action) => {
        state = [...action.payload];
        return state;
    }
  },
});

export const {setProduct} = productSlice.actions;
export default productSlice.reducer;
