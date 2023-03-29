import { NavLink } from 'react-router-dom';
import keycloak, {
  loginWithRedirect,
  logoutWithRedirect,
  registerWithRedirect,
} from '../../keycloak';
import { ROLES } from '../../const/roles';

import './AuthMenu.css';

function AuthMenu() {
  


  return (
    <>
      {keycloak.authenticated && (
        <>
          <ul className='menu-list main-menu right-menu'>


          {keycloak.hasRealmRole(ROLES.Admin) && (
              <li>
                <NavLink to='/admin' className='menu-link button-animation'>
                  Admin page
                </NavLink>
              </li>
            )           
            }
            
          {keycloak.hasRealmRole(ROLES.Contributor) && (
              <li>
                <NavLink to='/contribute-exercise' className='menu-link button-animation'>
                  Contribute
                </NavLink>
              </li>
            )           
            }
            
            <li>
              <NavLink to='/goals' className='menu-link button-animation'>
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
