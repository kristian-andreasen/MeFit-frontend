import { useEffect, useState } from 'react';
import { getAllExercises } from '../../api/fetchExercises';
import {addWorkout} from '../../api/postWorkout'
import './WorkoutForm.css';

function WorkoutForm() {
  const [exercises, setExercises] = useState([])
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);



  useEffect(()=>{
    async function fetchExercises() {
      const [, data] = await getAllExercises();
      setExercises(data);
    }
    fetchExercises();

  },[])

  const handleExerciseChange = (e) => {
    const selectedExerciseIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
     
    );
    
    setSelectedExercises(selectedExerciseIds);
  };
  async function handleSubmit(e){
    e.preventDefault();
    const tempList = []
    selectedExercises.map((id)=>tempList.push(exercises[id-1]))
    const data = {
      exercises: tempList,
      name: name,
      description: description,
      type: ""
    }
    await addWorkout(data);
    

  }


  return (
    <form className='workout-form' onSubmit={handleSubmit}>
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
          <option value=''>-- Select --</option>
          {exercises.map((exercises) => (
        <option className='program-item' key={exercises.id} value={exercises.id}>
          {exercises.name}
        </option>
      ))}
          
          
          
        </select>
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default WorkoutForm;
