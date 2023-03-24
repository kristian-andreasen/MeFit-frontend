import apiURL from "../const/apiUrl";
import keycloak from "../keycloak";

export async function addWorkout(workout) {
    const response = await fetch(`${apiURL}/workouts`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    });
    if (!response.ok) {
      const errorMessage = `Failed to add exercise: ${response.status} - ${response.statusText}`;
      throw new Error(errorMessage);
    }
    const data = response.json();
    return data;
  }
  