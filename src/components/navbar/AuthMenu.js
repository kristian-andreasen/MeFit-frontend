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
              <NavLink to='/profile' className='menu-link'>Profile</NavLink>
            </li>
            <li>
              <button
                className='login-button'
                onClick={() => logoutWithRedirect()}
              >
                Logout
              </button>
            </li>
          </ul>

          <div className='profile-greeting'>
            <div>
              {/*getting the name of sign-in user */}
              <h1>Hi, {keycloak.tokenParsed.name}</h1>
            </div>
          </div>
        </>
      )}

      {!keycloak.authenticated && (
        <ul className='menu-list main-menu right-menu'>
          <li>
            <button
              className='login-button'
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
