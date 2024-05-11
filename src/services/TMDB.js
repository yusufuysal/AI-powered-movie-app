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
      query: ({ categoryOrGenreName, page, searchQuery }) => {
        //Get movies by category
        if (categoryOrGenreName && typeof categoryOrGenreName === 'string') {
          return `movie/${categoryOrGenreName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get movies by genre
        if (categoryOrGenreName && typeof categoryOrGenreName === 'number') {
          return `discover/movie?with_genres=${categoryOrGenreName}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //Get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get popular movies (default fetch)
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
