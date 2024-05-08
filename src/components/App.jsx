import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Actors, MovieInfo, Movies, NavBar, Profile } from './index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
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
  return (
    <RouterProvider router={router}>
      <CssBaseline />
      <NavBar />
    </RouterProvider>
  );
}

export default App;
