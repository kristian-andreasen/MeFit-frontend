import Navbar from '../components/navbar/Navbar';
import keycloak from '../keycloak';

function FAQ() {
  return (
    <>
      <Navbar />
      
     <p>{keycloak.token}</p>
    </>
  );
}

export default FAQ;
