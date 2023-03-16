import ProfileHeader from '../profile/ProfileHeader';
import ProfileTabs from '../profile/ProfileTabs';

import './Program.css';

function Program() {
  return (
    <>
      <ProfileHeader />
      <ProfileTabs />
      <main className='program-details-page'>
        <section className='program-details'>
          <div>
            <h1 className='program-title'>Program Title</h1>
            <p className='program-creator'>by Arnold Schwarzenegger</p>
          </div>
          <p className='program-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className='start-program-button'>START TODAY</button>
          <div className='workout-details'>
            <p>Workouts:</p>
            <ul className='workouts-list'>
              <li className='workout-item'>
                <p>Lower body focus on hamstrings</p>
                <button>View Workout</button>
              </li>
              <li className='workout-item'>
                <p>Upper body focus vertical</p>
                <button>View Workout</button>
              </li>
              <li className='workout-item'>
                <p>Whole body strength & endurance</p>
                <button>View Workout</button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Program;
