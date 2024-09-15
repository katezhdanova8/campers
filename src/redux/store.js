import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import camperReducer from './camperSlice';
import campersReducer from './campersSlice';
import filtersReducer from './filtersSlice';
import favouritesReducer from './favouritesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourites'],
};

const rootReducer = combineReducers({
  camper: camperReducer,
  campers: campersReducer,
  filters: filtersReducer,
  favourites: favouritesReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store); 

export default store;