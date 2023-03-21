import { useEffect, useState } from 'react';
import { addProgram } from '../../api/contribute';
import './ContributeForm.css';
import keycloak from '../../keycloak';


function ContributeForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let program = { 
        name: title, 
        author: keycloak.tokenParsed.name,
        description: description
    };
    try {
      const result =  addProgram(program);
      console.log(result);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='contribute-form'>
      <fieldset className='contribute-fieldset'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </fieldset>
      <fieldset className='contribute-fieldset'>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </fieldset>
      <fieldset className='contribute-fieldset'>
        <label htmlFor='workouts'>Workouts (separate with commas)</label>
        <input type='text' id='workouts' />
      </fieldset>
      <button type='submit'>Add Program</button>
    </form>
  );
}

export default ContributeForm;
