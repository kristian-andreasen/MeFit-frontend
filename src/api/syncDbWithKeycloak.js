import apiURL from "../const/apiUrl";
import keycloak from "../keycloak";



export const getJwtInfo = async () => {
    try {
      const response = await fetch(`${apiURL}/user_accs/info`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${keycloak.token}`,
            'Content-Type': 'application/json',
          }
      });
      if (!response.ok) {
        throw new Error('Could not fetch jwt info');
      }
      const data = await response.json();
      return [null, data];
    } catch (error) {
      return [error.message, null];
    }
  };

  export const postSignupData = async (data) => {
    try {
      const response = await fetch(`${apiURL}/user_accs`,{
        method: 'POST',
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${keycloak.token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
      });
      if(!response.ok){
        throw new Error('could not post signup');
      }
      const responseJson = JSON.stringify(response);
      return [null,responseJson];
    }
    catch (error){
      return [error.message,null];
    }



  }
  

