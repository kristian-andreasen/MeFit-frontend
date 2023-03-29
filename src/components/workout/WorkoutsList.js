import { NavLink } from 'react-router-dom';
import './WorkoutsList.css';
import { useEffect, useState } from 'react';
import { getAllWorkouts } from '../../api/fetchWorkoutData';

function WorkoutsList() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // fetch the list of workouts when the component mounts
    async function fetchWorkouts() {
      const [, data] = await getAllWorkouts();
      console.log(data); // log the response
      setWorkouts(data);
    }
    fetchWorkouts();
  }, []);

  return (
    <>
      <ul className='workouts-list'>
        {workouts.map((workout) => workout && workout.id && ( // add null/undefined check
              <NavLink key={workout.id} to={`/workout/${workout.id}`}>
                <li className='workout-item'>{workout.name}</li>
              </NavLink>
            )
        )}
      </ul>
    </>
  );
}

export default WorkoutsList;
