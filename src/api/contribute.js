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
