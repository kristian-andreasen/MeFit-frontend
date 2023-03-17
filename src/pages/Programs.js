import ProgramsList from '../components/programs/ProgramsList';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';

import './Programs.css';
import { useEffect, useState } from 'react';

function Programs() {

  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <ProfileTabs />
        <section className='programs-section'>
          <ProgramsList/>
        </section>
      </main>
    </>
  );
}

export default Programs;
