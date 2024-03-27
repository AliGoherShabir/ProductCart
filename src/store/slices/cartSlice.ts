import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../types";

interface CartState {
  data: CartProduct[];
}

const initialState: CartState = {
  data: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      state.data.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action: PayloadAction<CartProduct>) => {
      const { id } = action.payload;
      state.data = state.data.filter((item) => item.id !== id);
    },
    incrementCart: (state, action: PayloadAction<CartProduct>) => {
      const { id } = action.payload;
      const item = state.data.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementCart: (state, action: PayloadAction<CartProduct>) => {
      const { id } = action.payload;
      const item = state.data.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: () => initialState,
  },
});

export const {
  addToCart,
  incrementCart,
  decrementCart,
  clearCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
