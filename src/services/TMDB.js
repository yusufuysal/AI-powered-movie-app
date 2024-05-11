import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_APP_TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ selectedCategoryOrGenre, page }) => {
        //Get movies by category
        if (
          selectedCategoryOrGenre &&
          typeof selectedCategoryOrGenre === 'string'
        ) {
          return `movie/${selectedCategoryOrGenre}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get movies by genre
        if (
          selectedCategoryOrGenre &&
          typeof selectedCategoryOrGenre === 'number'
        ) {
          return `discover/movie?with_genres=${selectedCategoryOrGenre}&page=${page}&api_key=${tmdbApiKey}`;
        }
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
