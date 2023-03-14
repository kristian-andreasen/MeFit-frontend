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
          {/*getting the name of sign-in user */}
          <h1 className=''>Hi, {keycloak.tokenParsed.name}</h1>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
