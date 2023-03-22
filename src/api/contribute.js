import keycloak from '../keycloak';
import apiURL from '../const/apiUrl';

export async function addProgram(program) {
  const response = await fetch(`${apiURL}/programs`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${keycloak.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(program),
  });
  const data = JSON.stringify(response);
  return data;
}

export async function addExercise(exercise) {
  const response = await fetch(`${apiURL}/exercises`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${keycloak.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exercise),
  });
  if (!response.ok) {
    const errorMessage = `Failed to add exercise: ${response.status} - ${response.statusText}`;
    throw new Error(errorMessage);
  }
  return response.json();
}
