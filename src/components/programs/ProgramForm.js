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

  useEffect(()=>{
    async function fetchPrograms() {
      const [, data] = await getAllWorkouts();
      setWorkouts(data);
    }
    fetchPrograms();

  },[])

  const handleProgramsChange = (e)=>{
    const selectedworkoutIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    
    setSelectedWorkouts(selectedworkoutIds);

  }



  const handleSubmit = async (event) => {
    event.preventDefault();


      
    
    
    try {
      const tempList = [];
      selectedWorkouts.map((id)=>tempList.push(workouts[id-1]));
      console.log(tempList)
      const data = {
        workouts: tempList,
        name: title,
        description: description,
        category: "",
        imageURL: ""
      }
      const result = await addProgram(data);
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
        <legend>Workouts</legend>
        <select
          multiple={true}
          id='exercises'
          value={selectedWorkouts}
          onChange={handleProgramsChange}
        >
          <option value=''>-- Select --</option>
          {workouts.map((exercises) => (
        <option className='program-item' key={exercises.id} value={exercises.id}>
          {exercises.name}
        </option>
      ))}
          
          
          
        </select>
      </fieldset>
      <button type='submit'>Add Program</button>
    </form>
  );
}

export default ProgramForm;
