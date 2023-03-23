import Keycloak from "keycloak-js";


const keycloak = new Keycloak("/keycloak.json");

/**
 * Initialize Keycloak and silently checking for an existing login.
 * @description Should be called before render() of app.
 * @returns { Promise<void> } Promise
 */
export const initialize = () => {
  const config = {
    checkLoginIframe: false,
    onLoad: "check-sso",
    silentCheckSsoRedirectUri:
    window.location.origin + "/silent-check-sso.html",
  };
  return keycloak.init(config)
};

/* Set redirectUri to "/profile" and then login
*/
export const loginWithRedirect = () => {
  keycloak.redirectUri= window.location.origin + "/loading";
  keycloak.login()
}
/* Set redirectUri to "/" and then logout
*/
export const logoutWithRedirect = () => {
  keycloak.redirectUri= window.location.origin + "/loading";
  keycloak.logout();
}

export const registerWithRedirect = () => {
  keycloak.redirectUri= window.location.origin + "/loading";
  keycloak.register()

}



/** @type { Keycloak } keycloak */
export default keycloak;
