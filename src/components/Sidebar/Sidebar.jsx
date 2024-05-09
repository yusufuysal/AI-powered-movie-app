import { useEffect } from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import useStyles from './styles';

const categories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

const fakeCategories = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Thriller', value: 'thriller' },
  { label: 'Western', value: 'western' },
  { label: 'Drama', value: 'drama' },
];

const blueLogo =
  'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const redLogo =
  'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  console.log('Sidebar');

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? blueLogo : redLogo}
          alt="Filmpire logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/*<ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {fakeCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              {/*<ListItemIcon>
                <img
                  src={redLogo}
                  className={classes.genreImages}
                  height={30}
                />
              </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
