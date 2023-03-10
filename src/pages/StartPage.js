import keycloak, { loginWithRedirect, logoutWithRedirect } from "../keycloak";
import Navbar from "../components/navbar/Navbar";
import { Navigate } from "react-router-dom";

/**
 * Example Start Page using Keycloak Context.
 */
function StartPage() {
  return (
    <div>
      <Navbar/>
      <h1>Start Page</h1>

      <section className="actions">
        {!keycloak.authenticated && (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
        {keycloak.authenticated && (
          <button onClick={() => logoutWithRedirect()}>Logout</button>
        )}
      </section>

      {keycloak.token && (
        <div>
          <h4>Token</h4>
          <p>Name: { keycloak.tokenParsed.name}</p>
          <p>Username: { keycloak.tokenParsed.preferred_username}</p>
          <p>Sub: { keycloak.tokenParsed.sub }</p>

          <pre>{keycloak.token}</pre>
          
        </div>
      )}
    </div>
  );
}
export default StartPage;