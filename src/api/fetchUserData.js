import keycloak from '../keycloak';

import apiURL from '../const/apiUrl';

export const getCurrentGoals = async () => {
  try {
    const response = await fetch(`${apiURL}/goals`, {
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

function lol(
  
)

//asdas
