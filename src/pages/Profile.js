import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';
import ProgramsList from '../components/programs/ProgramsList';

function Profile() {
  return (
    <div className='profile-container'>
      <ProfileHeader />
      <ProfileTabs />
    </div>
  );    
}

export default Profile;
