import { useState } from 'react';
import './WorkoutForm.css';

function WorkoutForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);

  const handleExerciseChange = (e) => {
    const selectedExerciseIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedExercises(selectedExerciseIds);
  };
  return (
    <form className='workout-form'>
      <div>
        <label htmlFor='name'>Name:</label>
        <br></br>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <br></br>
        <textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='exercises'>Exercises:</label>
        <br></br>
        <select
          multiple={true}
          id='exercises'
          value={selectedExercises}
          onChange={handleExerciseChange}
        >
          <option value='1'>Push-ups</option>
          <option value='2'>Squats</option>
          <option value='3'>Lunges</option>
          <option value='4'>Plank</option>
          <option value='5'>Jumping Jacks</option>
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default WorkoutForm;
