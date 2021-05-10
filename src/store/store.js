import { configureStore } from '@reduxjs/toolkit';

import ProductReducer from './reducers/product-reducer';

export const store = configureStore({
  reducer: {
    shop: ProductReducer,
  },
});
