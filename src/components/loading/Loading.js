import { useEffect, useState } from 'react';
import keycloak from '../../keycloak';
import './Loading.css';

function Loading() {
  return (
    <>
      <div className='loading-container'>
        <h1 className='loading'>Connecting...</h1>
        
      </div>
      
    </>
  );
}

export default Loading;
