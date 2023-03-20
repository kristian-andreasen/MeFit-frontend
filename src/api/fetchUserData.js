import keycloak from '../keycloak';

import apiURL from '../const/apiUrl';

export const getGoalById = async (id) => {
  try {
    const response = await fetch(`${apiURL}/goals/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      throw new Error('Could not fetch goal');
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, null];
  }
};
