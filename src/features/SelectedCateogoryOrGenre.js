import { createSlice } from '@reduxjs/toolkit';

const CategoryOrGenre = createSlice({
  name: 'CategoryOrGenre',
  initialState: {
    categoryOrGenreName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectCategoryOrGenre: (state, action) => {
      state.categoryOrGenreName = action.payload;
      state.searchQuery = '';
    },
    searchMovies: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectCategoryOrGenre, searchMovies } = CategoryOrGenre.actions;
export default CategoryOrGenre.reducer;
