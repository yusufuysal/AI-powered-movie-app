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
      console.log(action.payload);
      state.categoryOrGenreName = action.payload;
      console.log(state.categoryOrGenreName);
    },
  },
});

export const { selectCategoryOrGenre } = CategoryOrGenre.actions;
export default CategoryOrGenre.reducer;
