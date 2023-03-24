import apiURL from "../const/apiUrl";
import keycloak from "../keycloak";

export const getAllExercises = async () => {
    try {
      const response = await fetch(`${apiURL}/exercises`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${keycloak.token}`,
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Could not fetch Exercise');
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, null];
    }
  };