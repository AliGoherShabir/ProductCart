import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";

interface ProductState {
  data: Product[];
}

const initialState: ProductState = {
  data: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product>) => {
      //   state.data = action.payload;
    },
    clearProducts: () => initialState,
  },
});

export const { setProducts, clearProducts } = productSlice.actions;

export default productSlice.reducer;
