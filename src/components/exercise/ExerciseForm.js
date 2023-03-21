import { useState } from 'react';
import { addExercise } from '../../api/contribute';
import './ExerciseForm.css';

function ExerciseForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [numSets, setNumSets] = useState('');
  const [numReps, setNumReps] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const exercise = {
      name: name,
      description: description,
      setCounts: numSets,
      reps: numReps,
    };

    try {
      const response = await addExercise(exercise);
      console.log("Exercise added successfully:", response);
      // Do something with the response data, such as displaying a success message to the user
    } catch (error) {
      console.error("Failed to add exercise:", error.message);
      // Do something with the error, such as displaying an error message to the user
    }
  };

  return (
    <form className='exercise-form' onSubmit={handleSubmit}>
      <fieldset className='exercise-form-fieldset'>
        <legend>Exercise Information</legend>
        <label>
          Exercise Name:
          <br></br>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Exercise Description:
          <br></br>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </fieldset>

      <fieldset className='exercise-form-fieldset'>
        <legend>Set and Rep Information</legend>
        <label>
          Number of Sets:
          <br></br>

          <input
            type='number'
            value={numSets}
            onChange={(e) => setNumSets(e.target.value)}
          />
        </label>

        <label>
          Number of Reps per Set:
          <br></br>

          <input
            type='number'
            value={numReps}
            onChange={(e) => setNumReps(e.target.value)}
          />
        </label>
      </fieldset>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default ExerciseForm;
