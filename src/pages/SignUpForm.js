import { useState } from 'react';

import './SignUpForm.css';

function SignUpInfo() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Weight:', weight);
    console.log('Height:', height);
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

export default SignUpInfo;
