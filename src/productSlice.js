// productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, status: 0 });
    },
    updateProductStatus: (state, action) => {
      const { product_id, status } = action.payload;
      const product = state.products.find((p) => p.product_id === product_id);
      if (product) {
        product.status = status;
      }
    },
  },
});

export const { addProduct, updateProductStatus } = productSlice.actions;
export default productSlice.reducer;
