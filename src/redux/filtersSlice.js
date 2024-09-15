import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    location: '',
    equipment: [],
    type: []
  },
  reducers: {
    changeFilter: (state, action) => {
      const { location, equipment, type, itemsToRemove } = action.payload;

      const updatedEquipment = state.equipment
        .filter(item => !itemsToRemove.equipment.includes(item)) 
        .concat(equipment);

      const updatedType = state.type
        .filter(item => !itemsToRemove.type.includes(item))
        .concat(type); 

      return {
        location: location,
        equipment: [...new Set(updatedEquipment)],
        type: [...new Set(updatedType)], 
      };
    },
    resetFilters: (state) => {
      return {
        location: '',
        equipment: [],
        type: []
      };
    }
  },
});

export const {
  changeFilter,
  resetFilters,
} = filtersSlice.actions;

export const selectFilters = (state) => state.filters;

export default filtersSlice.reducer;
