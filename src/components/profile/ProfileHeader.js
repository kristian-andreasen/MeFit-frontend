import keycloak, {loginWithRedirect, logoutWithRedirect,} from '../../keycloak';

import './ProfileHeader.css';
import { NavLink } from 'react-router-dom';

function ProfileHeader() {
  return (
    <header class='banner'>
      <div class='after'>
        <div id='header'>
          <nav>
            <div></div>
            <a>
              <NavLink to='/'>MeFit</NavLink>
            </a>

            <p>
              {keycloak.authenticated && (
                <button onClick={() => logoutWithRedirect()}>Logout</button>
              )}
            </p>
          </nav>
        </div>
        <div class='greeting'>
          {keycloak.token && (
            <div>
              {/*getting the name of sign-in user */}
              <h1>Hi,{keycloak.tokenParsed.name}</h1>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
