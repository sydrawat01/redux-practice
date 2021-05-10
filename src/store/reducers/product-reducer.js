import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 'p1',
      title: 'Red Scarf',
      description: 'A pretty red scarf.',
      isFavourite: false,
    },
    {
      id: 'p2',
      title: 'Blue T-Shirt',
      description: 'A pretty blue t-shirt.',
      isFavourite: false,
    },
    {
      id: 'p3',
      title: 'Green Trousers',
      description: 'A pair of lightly green trousers.',
      isFavourite: false,
    },
    {
      id: 'p4',
      title: 'Orange Hat',
      description: 'Street style! An orange hat.',
      isFavourite: false,
    },
  ],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    toggleFav(state, action) {
      //logic
    },
  },
});

export default productSlice.reducer;
