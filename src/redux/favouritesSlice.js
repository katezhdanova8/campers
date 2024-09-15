import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: {
    items: [], 
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const camper = action.payload;
      const existingCamper = state.items.find(item => item.id === camper.id);

      if (existingCamper) {
        state.items = state.items.filter(item => item.id !== camper.id);
      } else {
        state.items.push(camper);
      }
    },
  },
});

export const { toggleFavourite } = favouritesSlice.actions;
export const selectFavourites = (state) => state.favourites.items;
export default favouritesSlice.reducer;
