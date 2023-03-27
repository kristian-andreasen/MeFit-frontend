import apiURL from '../const/apiUrl';
import keycloak from '../keycloak';

export async function fetchGoals() {
  try {
    const userId = keycloak.tokenParsed.sub; // get the user ID from Keycloak
    const response = await fetch(`${apiURL}/goals?userId=${userId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Could not fetch workout');
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
}
