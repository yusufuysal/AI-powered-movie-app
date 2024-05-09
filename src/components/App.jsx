import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './index';
import useStyles from './styles';

const router = createBrowserRouter([
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
]);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <RouterProvider router={router}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
