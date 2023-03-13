import { NavLink } from 'react-router-dom';
import './MenuItems.css';

function MenuItems() {
  return (
    <ul className='menu-list main-menu left-menu'>
      <li>
        <NavLink to='/' className='menu-link'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/about' className='menu-link'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to='/faq' className='menu-link'>
          FAQ
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuItems;
