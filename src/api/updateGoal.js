import apiURL from '../const/apiUrl';
import keycloak from '../keycloak';

export async function updateGoalAchieved(goalId) {
  try {
    const response = await fetch(`${apiURL}/goals/${goalId}`, { //${apiURL}/goals/${goalId}
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: goalId,
         achieved: true 
        }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
