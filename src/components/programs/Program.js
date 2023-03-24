import ProfileHeader from '../profile/ProfileHeader';
import ProfileTabs from '../profile/ProfileTabs';

import { getProgramById } from '../../api/fetchProgramData';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import './Program.css';
import Loading from '../loading/Loading';

function Program() {
  const { id } = useParams(); // get the program id from the URL
  const [program, setProgram] = useState(null);

  useEffect(() => {
    async function fetchProgram() {
      const [, data] = await getProgramById(id); // fetch program by id
      console.log(data);
      setProgram(data);
    }
    fetchProgram();
  }, [id]);

  return (
    <>
      <ProfileHeader />
      <ProfileTabs />
      {program && (
        <main className='program-details-page'>
          <section className='program-details'>
            <div>
              <h1 className='program-title'>{program.name}</h1>
              <p className='program-creator'>by {program.author}</p>
            </div>
            <p className='program-description'>{program.description}</p>
            <button className='start-program-button'>START TODAY</button>
            <div className='workout-details'>
              <p>Workouts:</p>
              <ul className='workouts-list'>
                {program.workouts.map((workout) => (
                  <li key={workout.id} className='workout-item'>
                    <p>{workout.name}</p>
                    <NavLink to={`/workouts/${workout.id}`}>
                      <button>View Workout</button>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Program;
