import { useEffect } from 'react';
import keycloak from '../../keycloak';
import './Loading.css';

function Loading() {

  useEffect(()=>{
    if(keycloak.authenticated){
      sessionStorage.setItem("id",keycloak.tokenParsed.sub)
    }


  },[])




  return (
    <div className='loading-container'>
      <h1 className='loading'>Connecting...</h1>
      {sessionStorage.getItem("id")}
    </div>
    
  );
}

export default Loading;
