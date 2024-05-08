import { Outlet } from 'react-router-dom';

const NavBar = () => {
  console.log('NavBar');

  return (
    <div>
      NavBar
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
