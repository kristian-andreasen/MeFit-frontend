import ContributorTabs from '../components/contribute/ContributorTabs';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProgramForm from '../components/programs/ProgramForm';


import './ContributeProgram.css';

function ContributeProgram() {

  return (
    <>
      <ProfileHeader />
      <ContributorTabs />
      <main className='main-content-area'>
        <section className='contribute-program-section'>
          <h2 className='contribute-program-title'>Create Program</h2>
          <ProgramForm />
        </section>
      </main>
    </>
  );
}

export default ContributeProgram;
