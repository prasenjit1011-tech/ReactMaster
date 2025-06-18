// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Counter slice
const counterSlice = createSlice({
  name: 'mycounter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});


// Banker slice
const bankerSlice = createSlice({
  name: 'mybanker',
  initialState: {
    balance: 1000,
  },
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
  },
});


// Create store with multiple reducers
const store = configureStore({
  reducer: {
    mycounter: counterSlice.reducer,
    mybanker: bankerSlice.reducer,
  },
});


export const { increment } = counterSlice.actions;
export const { deposit, withdraw } = bankerSlice.actions;
export default store;

