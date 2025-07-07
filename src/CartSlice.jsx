import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        state.items[action.payload.name] = {quantity:1,price:action.payload.cost};
    },
    removeItem: (state, action) => {
        const plant = action.payload.name;
        delete state.items.index;
    },
    updateQuantity: (state, action) => {
        state.items[action.payload.name].quantity = action.payload.quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
