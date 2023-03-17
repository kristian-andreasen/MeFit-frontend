import keycloak from '../keycloak';

const apiURL = 'http://localhost:8080/api/v1/programs';

export const getProgramById = async (id) => {
  try {
    //'programs' should be changed to 'program'
    const response = await fetch(`${apiURL}/${id}`, {
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
