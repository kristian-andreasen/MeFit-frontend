import { NavLink } from 'react-router-dom';
import keycloak, {
  loginWithRedirect,
  logoutWithRedirect,
  registerWithRedirect,
} from '../../keycloak';

import './AuthMenu.css';

function AuthMenu() {
  return (
    <>
      {keycloak.authenticated && (
        <>
          <ul className='menu-list main-menu right-menu'>
            <li>
              <NavLink to='/dashboard' className='menu-link button-animation'>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' className='menu-link button-animation'>
                Profile
              </NavLink>
            </li>
            <li>
              <button
                className='sign-up-button'
                onClick={() => logoutWithRedirect()}
              >
                Logout
              </button>
            </li>
          </ul>
        </>
      )}

      {!keycloak.authenticated && (
        <ul className='menu-list main-menu right-menu'>
          <li>
            <button
              className='login-button button-animation'
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </li>
          <li>
            <button
              className='sign-up-button'
              onClick={() => registerWithRedirect()}
            >
              SIGN UP
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default AuthMenu;
