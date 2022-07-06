import './Layout.css';
import { Outlet } from 'react-router-dom';
import MenuNav from '../MenuNav/MenuNav';

function Layout() {
  return (
    <div className='layout'>
      <MenuNav  />

      <div className="layout-main">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
