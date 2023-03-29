import Navbar from '../components/navbar/Navbar';
import VideoBackground from '../components/videoBackground/VideoBackground';
import keycloak from '../keycloak';

function FAQ() {
  return (
    <>
      <Navbar />
      <VideoBackground />
      
     <p>{keycloak.token}</p>
    </>
  );
}

export default FAQ;
