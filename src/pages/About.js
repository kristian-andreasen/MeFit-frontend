import VideoBackground from '../components/videoBackground/VideoBackground';
import Navbar from './FAQ';

function About() {
  return (
    <>
      <Navbar />
      <VideoBackground />
      <p>about</p>
      {sessionStorage.getItem("id")}
    </>
  );
}

export default About;
