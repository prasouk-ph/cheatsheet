import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';
import './MenuNav.css';

function MenuNav() {
  const overlayColor = {
    bmOverlay: {
      background: 'none'
    }
  }
  
  return (
      <Menu
        styles={overlayColor}
        width={"15vw"}
      >
          <Link to="react">ReactJS</Link>
          <Link to="javascript">Javascript</Link>
          <Link to="git">Git</Link>
          <Link to="css">CSS</Link>
          <Link to="html">HTML</Link>
          <Link to="regex">Regex</Link>
          <Link to="npm">Npm</Link>
      </Menu>
  );
}

export default MenuNav;
