import './MenuItems.css';

function MenuItems() {
  return (
    <ul className='menu-list main-menu left-menu'>
      <li>
        <a href='#' className='menu-link'>
          Home
        </a>
      </li>
      <li>
        <a href='#' className='menu-link'>
          About
        </a>
      </li>
      <li>
        <a href='#' className='menu-link'>
          FAQ
        </a>
      </li>
    </ul>
  );
}

export default MenuItems;
