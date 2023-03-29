import ProfileHeader from '../profile/ProfileHeader';
import ProfileTabs from '../profile/ProfileTabs';
import './Workout.css';
import { getWorkoutById } from '../../api/fetchWorkoutData';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Workout() {
  const { id } = useParams(); // get the program id from the URL
  const [workout, setWorkout] = useState(null);

  useEffect(() => {
    async function fetchWorkout() {
      const [, data] = await getWorkoutById(id); // fetch workout by id
      console.log(data);
      setWorkout(data);
    }
    fetchWorkout();
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <ProfileTabs />
      {workout ? ( // check if workout is not null before rendering
        <main className='program-details-page'>
          <section className='program-details'>
            <div>
              <h1 className='program-title'>{workout.name}</h1> 
              <p className='program-creator'>by {workout.author}</p>
            </div>
            <div className='exercise-container'>
              {workout.exercises.map(
                (
                  exercise // loop through workout exercises
                ) => (
                  <div key={exercise.id}>
                    <h2 className='exercise-title'>{exercise.name}</h2> 
                    <ul className='exercise-stats'>
                      <li className='stat-title'>
                        <div className='exercise-stat'>
                          <p className='stat-title'>Sets: {exercise.sets}</p>
                        </div>
                      </li>
                      <li>
                        <div className='exercise-stat'>
                          <p className='stat-title'>Reps: {exercise.repetitions} </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )
              )}
            </div>
          </section>
        </main>
      ) : (
        <p>Loading workout...</p> // add a loading message if workout is null
      )}
    </>
  );
}

export default Workout;
