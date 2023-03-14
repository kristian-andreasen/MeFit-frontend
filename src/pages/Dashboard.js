import Navbar from '../components/navbar/Navbar';
import ProfileTabs from './profile/ProfileTabs';

function Dashboard() {
  return (
    <>
      <Navbar />
      <p>Dashboard</p>
      <ProfileTabs />
    </>
  );
}

export default Dashboard;
