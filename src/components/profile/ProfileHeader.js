import keycloak, {
  loginWithRedirect,
  logoutWithRedirect,
} from '../../keycloak';
import { NavLink } from 'react-router-dom';

//custom components
import MenuItems from '../navbar/MenuItems';

//css
import './ProfileHeader.css';

function ProfileHeader() {
  return (
    <>
      <header className='header-container'>
        <nav className='main-navigation'>
          <MenuItems />
          <h1 className='header-heading'>MeFit</h1>
          <ul className='menu-list main-menu right-menu'>
            <li>
              <a href='#'>Settings</a>
            </li>
            <li>
              {keycloak.authenticated && (
                <button
                  className='login-button'
                  onClick={() => logoutWithRedirect()}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </nav>
        <div className='profile-greeting'>
          {keycloak.token && (
            <div>
              {/*getting the name of sign-in user */}
              <h1>Hi, {keycloak.tokenParsed.name}</h1>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default ProfileHeader;
