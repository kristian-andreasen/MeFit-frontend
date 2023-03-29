import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getSignUpData, postSignupData } from '../../api/syncDbWithKeycloak';
import keycloak from '../../keycloak';
import './Loading.css';

function PostLoginLoading() {
    const navigate = useNavigate();

    useEffect(()=>{
  

      if(keycloak.authenticated){
          let currentUserData = {
            id: keycloak.tokenParsed.sub,
            first_name: keycloak.tokenParsed.given_name,
            email: keycloak.tokenParsed.email,
            last_name: keycloak.tokenParsed.family_name,
            role: "user",
            age: 0,
            weight: 0,
            height: 0
          }
          try {
              getSignUpData(keycloak.tokenParsed.sub).then((response)=>{
                if(response[0]!=null){
                  postSignupData(currentUserData);
                  sessionStorage.setItem("userData",JSON.stringify(currentUserData));
                  let tempData = JSON.parse(sessionStorage.userData);
                  if(tempData.age===0 || tempData.weight===0 || tempData.height===0){
                    navigate("/goals")
                  } else {navigate("/")}
                  
                } else {
                  sessionStorage.setItem("userData",JSON.stringify(response[1]));
                  let tempData = JSON.parse(sessionStorage.userData);
                  if(tempData.age===0 || tempData.weight===0 || tempData.height===0){
                    navigate("/goals")
                  } else {navigate("/")}
                  
                }
              })

          } catch(e){
              console.log("error?")
          } 
          }
        if(!keycloak.authenticated){
          sessionStorage.setItem("userData",JSON.stringify({}));
          navigate("/");
        }
    },[navigate])

 




  return (
    <>
      <div className='loading-container'>
        <h1 className='loading'>Connecting...</h1>
        <p></p>
        
        
      </div>
      
    </>
  );
}

export default PostLoginLoading;
