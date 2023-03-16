import WorkoutsList from '../components/workout/WorkoutsList';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';

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
