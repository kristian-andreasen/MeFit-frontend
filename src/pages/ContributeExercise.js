import ContributorTabs from '../components/contribute/ContributorTabs';
import ExerciseForm from '../components/exercise/ExerciseForm';
import ProfileHeader from '../components/profile/ProfileHeader';

import './ContributeExercise.css'

function ContributeExercise() {
  return (
    <>
      <ProfileHeader />
      <ContributorTabs />
      <main className='main-content-area'>
        <section className='contribute-exercise-section'>
          <h2 className='contribute-exercise-title'>Create Exercise</h2>
          <p>Add a new exercise here, or go to "Workout" to create a new workout from existing exercises.</p>
          <ExerciseForm />
        </section>
      </main>
    </>
  );
}

export default ContributeExercise;
