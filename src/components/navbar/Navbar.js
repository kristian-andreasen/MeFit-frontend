import { NavLink } from 'react-router-dom';
import keycloak, {
  loginWithRedirect,
  logoutWithRedirect,
  registerWithRedirect,
} from '../../keycloak';
import MenuItems from './MenuItems';
import './Navbar.css';

function Navbar() {
  return (
    <header className='header-container'>
      <nav className='main-navigation'>
        <MenuItems />
        <h1 className='header-heading'>MeFit</h1>
        <ul className='menu-list main-menu right-menu'>
          <li>
            {!keycloak.authenticated && (
              <button
                className='login-button'
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </li>
          <li>
            {!keycloak.authenticated && (
              <button
                className='sign-up-button'
                onClick={() => registerWithRedirect()}
              >
                SIGN UP
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
