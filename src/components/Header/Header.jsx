import { Outlet } from 'react-router-dom';
import { NavBar } from '../index';
import useStyles from '../styles';

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </>
  );
};

export default Header;
