import apiURL from "../const/apiUrl";

export const getWorkoutById = async (id) => {
  try {
    const response = await fetch(`${apiURL}/workouts/${id}`, {
      mode: 'cors',
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
