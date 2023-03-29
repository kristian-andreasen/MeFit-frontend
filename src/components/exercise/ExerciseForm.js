import { useState } from 'react';
import { addExercise } from '../../api/contribute';
import './ExerciseForm.css';

function ExerciseForm() {
  const [name, setName] = useState('');
  const [muscle, setMuscle] = useState('');
  const [description, setDescription] = useState('');
  const [numSets, setNumSets] = useState(0);
  const [numReps, setNumReps] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const exercise = {
      name: name,
      description: description,
      sets: numSets,
      repetitions: numReps,
      muscle_group: muscle,
    };

    try {
      const response = await addExercise(exercise);
      console.log('Exercise added successfully:', response);
      setSuccessMessage('Exercise added successfully!');
      setErrorMessage('');

      // Do something with the response data, such as displaying a success message to the user
      // Reset the input fields
      setName('');
      setMuscle('');
      setDescription('');
      setNumSets(0);
      setNumReps(0);
    } catch (error) {
      console.error('Failed to add exercise:', error.message);
      // Do something with the error, such as displaying an error message to the user
      setErrorMessage(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <form className='exercise-form' onSubmit={handleSubmit}>
      <ul className='exercise-form-list'>
        <li className='exercise-input-container'>
          <h3>Name:</h3>
          <input
            placeholder='Eg squats'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='exercise-form-input'
          />
        </li>
        <h3>Muscle group:</h3>
        <input
          placeholder='Eg legs'
          type='text'
          value={muscle}
          onChange={(e) => setMuscle(e.target.value)}
          className='exercise-form-input'
        />
        <h3>Exercise Description:</h3>
        <textarea
          placeholder='Eg Step 1: Stand straight with feet hip-width apart...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='exercise-form-text'
        />
        <h3>Number of Sets:</h3>
        <input
          type='number'
          placeholder='4'
          value={numSets}
          onChange={(e) => setNumSets(e.target.value)}
          className='exercise-form-input exercise-form-number-input'
        />
        <h3>Number of Reps per Set:</h3>
        <input
          type='number'
          placeholder='12'
          value={numReps}
          onChange={(e) => setNumReps(e.target.value)}
          className='exercise-form-input exercise-form-number-input'
        />
      </ul>
      <button type='submit' className='exercise-form-submit'>
        Submit
      </button>
      {successMessage && <p className='success-message'>{successMessage}</p>}
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </form>
  );
}

export default ExerciseForm;
