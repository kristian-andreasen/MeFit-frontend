import apiURL from '../const/apiUrl';
import keycloak from '../keycloak';


export async function fetchGoals() {
  try {
    const response = await fetch(`${apiURL}/goals`, {
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
    const transformedGoals = data.map((goalData) => {
      return {
        name: goalData.name,
        startDate: goalData.startDate,
        endDate: goalData.endDate,
        achieved: goalData.achieved,
      };
    });
    return transformedGoals;
  } catch (error) {
    return [error.message];
  }
}
