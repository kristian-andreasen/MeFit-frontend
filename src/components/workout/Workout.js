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
              <h1 className='program-title'>{workout.name}</h1> // use workout
              name instead of hardcoded value
              <p className='program-creator'>by {workout.author}</p> // use
              workout author instead of hardcoded value
            </div>
            <div className='exercise-container'>
              {workout.exercises.map(
                (
                  exercise // loop through workout exercises
                ) => (
                  <div key={exercise.id}>
                    <h2 className='exercise-title'>{exercise.name}</h2> // use
                    exercise name instead of hardcoded value
                    <ul className='exercise-stats'>
                      <li className='stat-title'>
                        <div className='exercise-stat'>
                          <p className='stat-title'>Sets</p>
                          <p className='stat-value'>{exercise.sets}</p> // use
                          exercise sets instead of hardcoded value
                        </div>
                      </li>
                      <li>
                        <div className='exercise-stat'>
                          <p className='stat-title'>Reps</p>
                          <p className='stat-value'>{exercise.reps}</p> // use
                          exercise reps instead of hardcoded value
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
