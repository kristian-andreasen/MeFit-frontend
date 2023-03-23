import { useState } from 'react';
import { postSignupData, updateUserData } from '../api/syncDbWithKeycloak';
import keycloak from '../keycloak';

import './SignUpForm.css';

function SignUpForm() {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');


  function handleSubmit(event) {
    event.preventDefault();
    let data = {
      id: keycloak.tokenParsed.sub,
      age: age,
      weight: weight,
      height: height,
    }
    updateUserData(data,keycloak.tokenParsed.sub);
    

  }
  return (
    <form onSubmit={handleSubmit} className='signup-form'>
      <label className='signup-label'>Age:</label>
      <input
        type='number'
        placeholder='18'
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <label className='signup-label'>Weight:</label>
      <input
        type='number'
        placeholder='60'
        value={weight}
        onChange={(event) => setWeight(event.target.value)}
      />

      <label className='signup-label'>Height:</label>
      <input
        type='number'
        placeholder='170'
        value={height}
        onChange={(event) => setHeight(event.target.value)}
      />

      <button type='submit' className='signup-button'>
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
