import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './thunks';
import { selectFilters } from './filtersSlice';
import { getEquipmentOptions } from '../helpers/getEquipmentOptions';

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const selectLoading = (state) => state.campers.loading;
export const selectError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [state => state.campers.items, selectFilters], 
  (campers, filters) => {
    return campers.filter((camper) => {
      const camperOptions = getEquipmentOptions(camper); 
      const locationMatch = filters.location ? camper.location.includes(filters.location) : true;

      const equipmentMatch = filters.equipment.length > 0
        ? filters.equipment.every(selectedEquip => camperOptions.some(option => option.id === selectedEquip))
        : true;

      const typeMatch = filters.type.length > 0
        ? filters.type.includes(camper.form)
        : true;

      return locationMatch && equipmentMatch && typeMatch;
    });
  }
);

export const {
  resetCampers,
} = campersSlice.actions;

export default campersSlice.reducer;
