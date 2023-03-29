import videoBg from '../../assets/mefit.mov';
import './VideoBackground.css';


function VideoBackground() {

  return (
    <div className='video-background'>
      <video autoPlay='autoplay' loop='loop' muted className='video'>
        <source src={videoBg} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;