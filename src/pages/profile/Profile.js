import CalendarPlan from '../../components/CalendarPlan';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';

import './Profile.css';
import ProgressBar from '../../components/ProgressBar';

function Profile() {
  return (
    <div className='profile-container'>
      <ProfileHeader />
      <ProfileTabs />
      <h2 className='progress'>Progress:</h2>
      <ProgressBar />
      <CalendarPlan />
      <h3>lol</h3>
      <h3>lol</h3>
      <h3>lol</h3>

    </div>
  );    
}

export default Profile;
