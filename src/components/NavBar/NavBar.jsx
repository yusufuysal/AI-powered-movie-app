import { Outlet } from 'react-router-dom';
import useStyles from '../styles';

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>NavBar</div>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
