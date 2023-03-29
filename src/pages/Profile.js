import CalendarPlan from '../components/calendarPlan/CalendarPlan';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTabs from '../components/profile/ProfileTabs';

import './Profile.css';
import ProgressBar from '../components/progressBar/ProgressBar';

function Profile() {
  return (
    <div className='profile-container'>
      <ProfileHeader />
      <ProfileTabs />
      <h2 className='progress'>Progress:</h2>
      <CalendarPlan />
      <div className='progress-bar'>
        <ProgressBar />
      </div>
    </div>
  );
}

export default Profile;
