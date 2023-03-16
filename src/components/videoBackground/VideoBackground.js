//import mefitVid from '../assets/mefit-vid.mp4';
import './VideoBackground.css';


function VideoBackground() {

  return (
    <div className='video-background'>
      <video autoPlay='autoplay' loop='loop' muted className='video'>
        <source src="" type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;