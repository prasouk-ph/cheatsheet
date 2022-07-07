import './Layout.css';
import { Outlet } from 'react-router-dom';
import MenuNav from '../MenuNav/MenuNav';

function Layout() {
  return (
    <div>
      <MenuNav  />

      <div className="layout">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
