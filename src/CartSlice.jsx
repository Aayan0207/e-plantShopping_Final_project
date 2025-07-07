import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        state.items.push({name:action.payload.name,image:action.payload.image,quantity:1,cost:action.payload.cost});    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name!=action.payload.name);
    },
    updateQuantity: (state, action) => {
        const item = state.items.find(item => item.name === action.payload.name);
        if (item){
            item.quantity=action.payload.quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
