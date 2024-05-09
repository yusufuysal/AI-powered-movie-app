import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Avatar,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  Brightness4,
  Brightness7,
  AccountCircle,
} from '@mui/icons-material';
import useStyles from './styles';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{
                outline: 'none',
              }}
              onClick={() => {}}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && 'Search component...'}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobile && 'Search component...'}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
