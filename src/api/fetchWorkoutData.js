import apiURL from "../const/apiUrl";
import keycloak from "../keycloak";

export const getWorkoutById = async (id) => {
  try {
    const response = await fetch(`${apiURL}/workouts/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      }
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

export const getAllWorkouts = async () => {
  try {
    const response = await fetch(`${apiURL}/workouts`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      }
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



