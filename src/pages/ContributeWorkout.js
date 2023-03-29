import ContributorTabs from '../components/contribute/ContributorTabs';
import ProfileHeader from '../components/profile/ProfileHeader';
import WorkoutForm from '../components/workout/WorkoutForm';

import './ContributeWorkout.css';

function ContributeWorkOut() {
  return (
    <>
      <ProfileHeader />
      <ContributorTabs />
      <main className='main-content-area'>
        <section className='contribute-workout-section'>
          <h2 className='contribute-workout-title'>Create Workout</h2>
          <p>Add a new workout here, or go to "Program" to create a new program from existing workouts.</p>
          <WorkoutForm />
        </section>
      </main>
    </>
  );
}

export default ContributeWorkOut;
