import keycloak from '../../keycloak';

//css
import './ProfileHeader.css';

import Navbar from '../../components/navbar/Navbar';

function ProfileHeader() {
  return (
    <>
      <Navbar />
      <div className='profile-greeting'>
        <div>
          <h1>Hi, {keycloak.tokenParsed.name}</h1>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
