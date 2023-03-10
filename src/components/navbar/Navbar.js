import { NavLink } from 'react-router-dom';
import keycloak, { loginWithRedirect, logoutWithRedirect } from '../../keycloak';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>coach</a>
          </li>
          <li>
            <a>blog</a>
          </li>
          <li>
            <a>community</a>
          </li>
        </ul>
        <div id='mefit-logo'>
          <h1>
          <NavLink to='/'>MeFit</NavLink>
          </h1>
        </div>
        <ul>
          <li>
          {!keycloak.authenticated && (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
        {keycloak.authenticated && (
          <button onClick={() => logoutWithRedirect()}>Logout</button>
        )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
