import apiURL from '../const/apiUrl';
import keycloak from '../keycloak';

export async function deleteGoal(id) {
  try {
    const response = await fetch(`${apiURL}/goals/${id}`, {
      method: 'DELETE',
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
    return [error.message, []];
  }
}