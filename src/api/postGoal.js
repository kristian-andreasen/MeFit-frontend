import apiURL from '../const/apiUrl';
import keycloak from '../keycloak';

export async function postGoal(goalData) {
  const response = await fetch(`${apiURL}/goals`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${keycloak.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(goalData),
  });

  if (!response.ok) {
    throw new Error('Could not create goal');
  }
  const data = response.json();
  return data;
}
