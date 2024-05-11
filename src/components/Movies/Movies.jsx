import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '../index';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Movies = () => {
  const [page, setPage] = useState(1);

  const selectedCategoryOrGenre = useSelector(
    (state) => state.selectedCategoryOrGenre.categoryOrGenreName,
  );

  console.log(selectedCategoryOrGenre);
  const { data, error, isFetching } = useGetMoviesQuery({
    selectedCategoryOrGenre,
    page,
  });

  //console.log(data);

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
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
