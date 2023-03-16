import keycloak from '../../keycloak';
import './ProfileHeader.css';
import Navbar from '../navbar/Navbar';

function ProfileHeader() {
  return (
    <div className='profile-header-container'>
      <Navbar />
      <h2 className='greeting-message'>Hi, {keycloak.tokenParsed.name}</h2>

    </div>
  );
}

export default ProfileHeader;
