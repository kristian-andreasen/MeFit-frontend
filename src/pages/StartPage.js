import Navbar from '../components/navbar/Navbar';
import VideoBackground from '../components/videoBackground/VideoBackground';
import './StartPage.css';

/**
 * Example Start Page using Keycloak Context.
 */
function StartPage() {
  return (
    <div className='homepage-container'>
      <VideoBackground />
      <Navbar />
      <main className='home-main-content'>
        <section className='banner-container'>
          <h1 className='banner-title'>
            If you never do it<br></br>you will never have done it.
          </h1>
        </section>
      </main>
    </div>
  );
}
export default StartPage;
