import ProfileHeader from '../../pages/profile/ProfileHeader';
import ProfileTabs from '../../pages/profile/ProfileTabs';
import './Workout.css';

function Workout() {
  return (
    <>
      <ProfileHeader />
      <ProfileTabs />
      <main className='program-details-page'>
        <section className='program-details'>
          <div>
            <h1 className='program-title'>Workout title</h1>
            <p className='program-creator'>by Arnold Schwarzenegger</p>
          </div>
          <div className='exercise-container'>
            <h2 className='exercise-title'>Exercise Title</h2>
            <ul className='exercise-stats'>
              <li className='stat-title'>
                <div className='exercise-stat'>
                  <p className='stat-title'>Sets</p>
                  <p className='stat-value'>2-3</p>
                </div>
              </li>
              <li>
                <div className='exercise-stat'>
                  <p className='stat-title'>Reps</p>
                  <p className='stat-value'>5</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Workout;
