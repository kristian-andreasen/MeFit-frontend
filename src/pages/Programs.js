import ProgramsList from '../components/programs/ProgramsList';
import ProfileHeader from './profile/ProfileHeader';
import ProfileTabs from './profile/ProfileTabs';

import './Programs.css';

function Programs() {
  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <ProfileTabs />
        <section className='programs-section'>
          <ProgramsList />
        </section>
      </main>
    </>
  );
}

export default Programs;
