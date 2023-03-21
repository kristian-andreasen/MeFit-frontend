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
          <h2 className='contribute-workout-title'>Create Program</h2>
          <WorkoutForm />
        </section>
      </main>
    </>
  );
}

export default ContributeWorkOut;
