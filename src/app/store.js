import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import categoryOrGenreReducer from '../features/SelectedCateogoryOrGenre';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    selectedCategoryOrGenre: categoryOrGenreReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
