import { useEffect, useState } from 'react';
import { getAllExercises } from '../../api/fetchExercises';
import { addWorkout } from '../../api/postWorkout';
import keycloak from '../../keycloak';
import './WorkoutForm.css';

function WorkoutForm() {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    async function fetchExercises() {
      const [, data] = await getAllExercises();
      setExercises(data);
    }
    fetchExercises();
  }, []);

  const handleExerciseChange = (e) => {
    const selectedExerciseIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setSelectedExercises(selectedExerciseIds);
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const tempList = [];
    selectedExercises.map((id) => tempList.push(exercises[id - 1]));
    const data = {
      exercises: tempList,
      name: name,
      description: description,
      type: '',
      author: keycloak.tokenParsed.name,
    };
    await addWorkout(data);
  }

  return (
    <form className='workout-form' onSubmit={handleSubmit}>
      <ul className='workout-form-list'>
        <div>
          <h3>Name:</h3>
          <input
            type='text'
            placeholder='Eg Legs Annihilation'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="workout-form-input"
          />
        </div>
        <div>
          <h3>Description:</h3>

          <textarea
            id='description'
            placeholder='Eg Make sure to warm up before you start this workout...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="workout-form-text-input"
          />
        </div>
        <div>
          <h3>Exercises:</h3>
          <p>Choose multiple exercises for a workout</p>

          <select
            multiple={true}
            className="workout-form-select-input"
            value={selectedExercises}
            onChange={handleExerciseChange}
          >
            {exercises.map((exercises) => (
              <option
                className='program-item'
                key={exercises.id}
                value={exercises.id}
              >
                {exercises.name}
              </option>
            ))}
          </select>
        </div>
      </ul>

      <button type='submit' className='workout-form-submit-btn'>
        Submit
      </button>
    </form>
  );
}

export default WorkoutForm;
