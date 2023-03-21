import ContributorTabs from '../components/contribute/ContributorTabs';
import ProfileHeader from '../components/profile/ProfileHeader';

import './ContributeExercise.css'

function ContributeExercise() {
  return (
    <>
      <ProfileHeader />
      <ContributorTabs />
      <main className='main-content-area'>
        <section className='contribute-exercise-section'>
          <h2 className='contribute-exercise-title'>Create Program</h2>
        </section>
      </main>
    </>
  );
}

export default ContributeExercise;
