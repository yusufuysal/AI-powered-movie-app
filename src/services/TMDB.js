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

    //Get single movie information
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    //Get recommended movies
    getRecommendations: builder.query({
      query: ({ movie_id, list }) =>
        `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    //Get people information, (actors in our case)
    getPeople: builder.query({
      query: (id) => `/person/${id}?api_key=${tmdbApiKey}`,
    }),

    getMoviesByActorId: builder.query({
      query: ({ id, page }) =>
        `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),

    //Get the list of favorited or watchlisted movies
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) =>
        `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetPeopleQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
