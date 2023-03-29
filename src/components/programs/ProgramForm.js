import { useEffect, useState } from 'react';
import { addProgram } from '../../api/contribute';
import './ProgramForm.css';
import keycloak from '../../keycloak';
import { getAllWorkouts } from '../../api/fetchWorkoutData';

function ProgramForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);

  useEffect(() => {
    async function fetchPrograms() {
      const [, data] = await getAllWorkouts();
      data.programs = [];
      setWorkouts(data);
    }
    fetchPrograms();
  }, []);

  const handleProgramsChange = (e) => {
    const selectedworkoutIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setSelectedWorkouts(selectedworkoutIds);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const tempList = [];
      selectedWorkouts.map((id) => tempList.push(workouts[id - 1]));
      const data = {
        workouts: tempList,
        name: title,
        author: '',
        description: description,
        category: '',
        imageURL: '',
        type: '',
      };
      console.log(data);
      await addProgram(data);
      //console.log(result);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='program-form'>
      <ul className='program-form-list'>
        <h3>Title:</h3>

        <input
          type='text'
          placeholder='Eg Running Foundations'
          id='title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="program-form-input"
        />

        <h3>Description</h3>

        <textarea
          id='description'
          placeholder='Eg Your legs are your foundation. They power nearly everything you do...'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="program-form-text"
        />

        <h3>Workouts</h3>
        <p>Select multiple workouts to be part of a program</p>
        <select
          multiple={true}
          id='exercises'
          value={selectedWorkouts}
          onChange={handleProgramsChange}
          className="program-form-select-input"
        >
          {workouts.map((exercises) => (
            <option
              className='program-item'
              key={exercises.id}
              value={exercises.id}
            >
              {exercises.name}
            </option>
          ))}
        </select>
      </ul>

      <button type='submit' className='submit-program-btn'>Add Program</button>
    </form>
  );
}

export default ProgramForm;
