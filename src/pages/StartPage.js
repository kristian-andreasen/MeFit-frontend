import keycloak, { loginWithRedirect, logoutWithRedirect } from '../keycloak';
import Navbar from '../components/navbar/Navbar';
import { Navigate } from 'react-router-dom';
import './StartPage.css';

/**
 * Example Start Page using Keycloak Context.
 */
function StartPage() {
  return (
    <div className='homepage-container'>
      <Navbar />
      <main className='home-main-content'>
        <section className='banner-container'>
          <h1 className='banner-title'>If you never do it<br></br>you will never have done it.</h1>
        </section>
      </main>
    </div>
  );
}
export default StartPage;
