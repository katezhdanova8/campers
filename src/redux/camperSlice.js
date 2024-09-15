import { createSlice } from '@reduxjs/toolkit';
import { fetchCamper } from './thunks';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

const camperSlice = createSlice({
  name: 'camper',
  initialState,
  reducers: {
    resetCamper: (state) => {
      state.item = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCamper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchCamper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const selectCamper = (state) => state.camper.item;
export const selectLoading = (state) => state.camper.loading;
export const selectError = (state) => state.camper.error;

export const {
  resetCamper,
} = camperSlice.actions;

export default camperSlice.reducer;
