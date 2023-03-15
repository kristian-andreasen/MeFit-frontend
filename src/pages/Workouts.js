import WorkoutsList from '../components/workouts/WorkoutsList';
import ProfileHeader from './profile/ProfileHeader';
import ProfileTabs from './profile/ProfileTabs';

import './Workouts.css'

function Workouts() {
  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <ProfileTabs />
        <section className='workout-list-container'>
          <WorkoutsList />
        </section>
      </main>
    </>
  );
}

export default Workouts;
