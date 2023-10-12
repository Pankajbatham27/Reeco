// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Import your slice

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;