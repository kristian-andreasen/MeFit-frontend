import ContributeForm from '../components/contribute/ContributeForm';
import ProfileHeader from '../components/profile/ProfileHeader';

import './contributor.css';

function Contributor() {
  return (
    <>
      <ProfileHeader />
      <main className='main-content-area'>
        <section className='contribute-program-section'>
          <h2 className='contribute-program-title'>Create Program</h2>
          <ContributeForm />
        </section>
      </main>
    </>
  );
}

export default Contributor;
