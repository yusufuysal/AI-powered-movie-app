import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header, Actors, MovieInfo, Movies, Profile } from './index';
import useStyles from './styles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Movies />,
      },
      {
        path: '/movie/:id',
        element: <MovieInfo />,
      },
      {
        path: 'actors/:id',
        element: <Actors />,
      },
      {
        path: '/profile/:id',
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const classes = useStyles();

  return (
    <RouterProvider router={router}>
      <div className={classes.root}>
        <CssBaseline />
      </div>
    </RouterProvider>
  );
}

export default App;
