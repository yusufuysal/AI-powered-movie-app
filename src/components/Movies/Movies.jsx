import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';
import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Movies = () => {
  const [page, setPage] = useState(1);

  const { categoryOrGenreName, searchQuery } = useSelector(
    (state) => state.selectedCategoryOrGenre,
  );

  const { data, error, isFetching } = useGetMoviesQuery({
    categoryOrGenreName,
    page,
    searchQuery,
  });

  const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));

  const numberOfMovies = lg ? 16 : 18;

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          Unfortunately, there is no movie found matched with your search.
          <br />
          Please search for other movies.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return <Typography>There has been an error</Typography>;
  }

  return (
    <div>
      <MovieList movies={data} numberOfMovies={numberOfMovies} />
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
    </div>
  );
};

export default Movies;
