import apiURL from "../const/apiUrl";
import keycloak from "../keycloak";

  export const updateUserData = async(data,id)=>{
    try {
      const response = await fetch(`${apiURL}/profiles/${id}`,{
        method: 'PUT',
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
      const dataReturn = response.json();
      return [null,dataReturn];
    }
    catch (error){
      return [error.message,null];
    }

  }



  export const getSignUpData = async(id) =>{
    try {
      //'programs' should be changed to 'program'
      const response = await fetch(`${apiURL}/profiles/${id}`, {
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
      return [null, data];
    } catch (error) {
      return [error.message, null];
    }

  }

  export const postSignupData = async (data) => {
    try {
      const response = await fetch(`${apiURL}/profiles`,{
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
      const dataReturn = response.json();
      return [null,dataReturn];
    }
    catch (error){
      return [error.message,null];
    }
    



  }
  

