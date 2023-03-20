import keycloak from '../keycloak';

import apiURL from '../const/apiUrl';

export const getProgramById = async (id) => {
  try {
    //'programs' should be changed to 'program'
    const response = await fetch(`${apiURL}/programs/${id}`, {
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
    return [error.message, null];
  }
};

export const getAllPrograms = async () => {
  try {
    const response = await fetch(`${apiURL}/programs`, {
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
