import { NavLink } from 'react-router-dom';
import './WorkoutsList.css';

function WorkoutsList() {
  return (
    <>
      <ul className='workouts-list'>
        <NavLink to='/workout'>
          <li class='workout-item'>Lower body focus on hamstrings</li>
        </NavLink>
        <NavLink to='/workout'>
          <li class='workout-item'>Upper body focus vertical</li>
        </NavLink>
        <NavLink to='/workout'>
          <li class='workout-item'>Whole body strength & endurance</li>
        </NavLink>
      </ul>
    </>
  );
}

export default WorkoutsList;
