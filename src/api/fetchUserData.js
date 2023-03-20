import keycloak from '../keycloak';

const apiURL = 'http://localhost:8080/api/v1/user/goals';

export const getCurrentGoals = async () => {
  try {
    const response = await fetch(apiURL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Could not fetch programs');
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};
