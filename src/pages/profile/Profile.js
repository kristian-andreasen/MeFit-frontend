import CalendarPlan from '../../components/CalendarPlan';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';

import './Profile.css';

function Profile() {
  return (
    <div className='profile-container'>
      <ProfileHeader />
      <ProfileTabs />
      <h2 className='progress'>Progress:</h2>
      <CalendarPlan />

    </div>
  );    
}

export default Profile;
