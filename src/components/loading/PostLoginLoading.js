import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { getSignUpData } from '../../api/syncDbWithKeycloak';
import keycloak from '../../keycloak';
import './Loading.css';

function PostLoginLoading() {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchSignUp(){
                const [, data] = await getSignUpData(keycloak.tokenParsed.sub);
                if(data!=null){
                    setUserData(data);
                }
        }
        let currentUserData = {
            id: keycloak.tokenParsed.sub,
            first_name: keycloak.tokenParsed.given_name,
            email: keycloak.tokenParsed.email,
            last_name: keycloak.tokenParsed.family_name,
            role: "user"
          }




    if(keycloak.authenticated){
        try {
            fetchSignUp(keycloak.tokenParsed.sub);
        } catch(e){
            console.log("hej")
        } 
        }
    },[])

 




  return (
    <>
      <div className='loading-container'>
        <h1 className='loading'>Connecting...</h1>
        <p>{userData.id}</p>
        
      </div>
      
    </>
  );
}

export default PostLoginLoading;
