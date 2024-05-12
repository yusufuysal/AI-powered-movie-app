import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import categoryOrGenreReducer from '../features/SelectedCateogoryOrGenre';
import userReducer from '../features/auth';

const store = configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    selectedCategoryOrGenre: categoryOrGenreReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});

export default store;
